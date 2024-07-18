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
import icon_wrong from "./Correct.svg";
import Infoicon from "./Correct.svg";

type infoicontType = Partial<PopoverProps> & {
  ValidValue: string;
  buttonClass?: any;
  positioning?: any;
  crossAxis?: number;
  mainAxis?: number;
};

const ZPopInfo = React.forwardRef<HTMLDivElement, infoicontType>(
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
    const [passwordValidations, setPasswordValidations] = useState({
      minLength: false,
      uppercase: false,
      lowercase: false,
      number: false,
      specialChar: false,
    });

    const handlePasswordChange = (password: string | undefined) => {
      setPasswordValidations({
        minLength: (password?.length || 0) >= 11,
        uppercase: /[A-Z]/.test(password ?? ""),
        lowercase: /[a-z]/.test(password ?? ""),
        number: /[0-9]/.test(password ?? ""),
        specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password ?? ""),
      });
    };

    useEffect(() => {
      handlePasswordChange(ValidValue);
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
                Password must
                <br />
                contain at least
              </Label>
              <br />
              <br />
              <div className={styles.body}>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={
                      passwordValidations.minLength ? icon_right : icon_wrong
                    }
                    alt=""
                  />
                  <span> 11 characters</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={
                      passwordValidations.uppercase ? icon_right : icon_wrong
                    }
                    alt=""
                  />
                  <span> One uppercase</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={
                      passwordValidations.lowercase ? icon_right : icon_wrong
                    }
                    alt=""
                  />
                  <span> One Lowercase</span>
                </div>
                <div>
                  <img
                    className={styles.innerTitle}
                    src={passwordValidations.number ? icon_right : icon_wrong}
                    alt=""
                  />
                  <span> One Number</span>
                </div>
                <div className={styles.specialChar}>
                  <img
                    className={styles.specialImg}
                    src={
                      passwordValidations.specialChar ? icon_right : icon_wrong
                    }
                    alt=""
                  />
                  <div>
                    One special <br />
                    character
                  </div>
                </div>
              </div>
            </div>
          </PopoverSurface>
        </Popover>
      </div>
    );
  }
);

export default ZPopInfo;
