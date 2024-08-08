import * as React from "react";
import {
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Label,
} from "@fluentui/react-components";
import type { PopoverProps } from "@fluentui/react-components";
import { useStyles } from "./style";
import { useEffect, useState } from "react";

import icon_right from "./Correct.svg";
import icon_wrong from "./wrongimg.svg";
import Infoicon from "./isvg.svg";

type infoicontType = Partial<PopoverProps> & {
  ValidValue: string;
  buttonClass?: any;
  positioning?: any;
  crossAxis?: number;
  mainAxis?: number;
};

const ZPopInfoIcon = React.forwardRef<HTMLDivElement, infoicontType>(
  (
    {
      ValidValue,
      positioning = "before",
      crossAxis = 10,
      mainAxis = 20,
      ...props
    },
    ref
  ) => {
    const styles = useStyles();
    const [gstinValidations, setGstinValidations] = useState({
      stateCode: false,
      pan: false,
      entityCode: false,
      defaultZ: false,
      checksum: false,
    });

    const handleGstinChange = (gstin: string | undefined) => {
    //   const gstinPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
      setGstinValidations({
        stateCode: gstin ? /^[0-9]{2}/.test(gstin) : false,
        pan: gstin ? /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(gstin.slice(2, 12)) : false,
        entityCode: gstin ? /^[1-9A-Z]{1}/.test(gstin.slice(12, 13)) : false,
        defaultZ: gstin ? gstin.charAt(13) === "Z" : false,
        checksum: gstin ? /^[0-9A-Z]{1}/.test(gstin.charAt(14)) : false,
      });
    };

    useEffect(() => {
      handleGstinChange(ValidValue);
    }, [ValidValue]);

    return (
      <div>
        <Popover
          {...props}
          positioning={{ position: "before", offset: { crossAxis, mainAxis } }}
        >
          <PopoverTrigger disableButtonEnhancement>
            <img
              src={Infoicon}
              alt="info icon"
              style={{ marginLeft: "350px", marginTop: "-10px" }}
              className={props.buttonClass}
            />
          </PopoverTrigger>

          <PopoverSurface
            tabIndex={-1}
            ref={ref}
            style={{ marginLeft: "-17px", borderRadius: "10px" }}
          >
            <div>
              <Label>
                GSTIN must
                <br />
                meet the following criteria:
              </Label>
              <br />
              <br />
              <div className={styles.body}>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={gstinValidations.stateCode ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> Valid State Code (2 digits)</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={gstinValidations.pan ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> Valid PAN (10 characters)</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={gstinValidations.entityCode ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> Entity Code (1 character)</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={gstinValidations.defaultZ ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> Default 'Z' at 14th position</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={gstinValidations.checksum ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> Checksum (1 character)</span>
                </div>
              </div>
            </div>
          </PopoverSurface>
        </Popover>
      </div>
    );
  }
);

export default ZPopInfoIcon;
