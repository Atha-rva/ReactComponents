import React, { useRef, useState } from "react";
import {
  Link,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  SearchBox,
} from "@fluentui/react-components";
import { useStyles } from "./ZPopoverStyle";
import { searchDropdownProps } from "./Props";

export const ZPopover: React.FC<searchDropdownProps> = ({
  buttonIcon,
  placeholder,
  options,
  linkLabel,
  onOptionClick,
  onLinkClick,
  varient,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<any>();
  const styles = useStyles();

  const [crossAxis, setCrossAxis] = React.useState(10);
  const [mainAxis, setMainAxis] = React.useState(10);

  const handleButtonClick = () => {
    if (!isOpen) {
      // buttonRef.current.style.backgroundColor = "#616161";
      // buttonRef.current.style.borderColor = "#242424";
    } else {
      buttonRef.current.style.backgroundColor = "";
      buttonRef.current.style.borderColor = "";
    }
    setIsOpen(!isOpen);
  };
  const handleDismiss = () => {
    buttonRef.current.style.backgroundColor = "";
    buttonRef.current.style.borderColor = "";
    setIsOpen(false);
  };

  return (
    <div>
      <Popover
        positioning={{ position: "below", offset: { crossAxis, mainAxis } }}
        open={isOpen}
        onOpenChange={(e, data) => {
          if (!data.open) handleDismiss();
        }}
      >
        <PopoverTrigger disableButtonEnhancement>
          <div
            ref={buttonRef}
            onClick={handleButtonClick}
            className={styles.button}
          >
            <div className={styles.buttonIcon}>{buttonIcon}</div>
          </div>
        </PopoverTrigger>

        <PopoverSurface className={styles.popoverSurface} tabIndex={-1}>
          <div
            className={varient == "large" ? styles.mainDiv1 : styles.mainDiv}
          >
            <SearchBox
              className={styles.searchbox}
              size="large"
              placeholder={placeholder}
              appearance="underline"
            />
            <hr className={styles.hr1} />
            <div className={styles.scrollContainer}>
              <div className={styles.scrollContent}>
                {options?.map((option, index) => (
                  <React.Fragment key={index}>
                    <div className={styles.option} onClick={onOptionClick}>
                      <div className={styles.subDiv}>{option}</div>
                    </div>
                    <hr className={styles.hr} />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <Link className={styles.link} {...props}>
              {linkLabel}
            </Link>
          </div>
        </PopoverSurface>
      </Popover>
    </div>
  );
};
