import React, { useRef, useState } from "react";
import {
  ButtonProps,
  Link,
  LinkProps,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  SearchBox,

} from "@fluentui/react-components";
import { useStyle } from "./ZAvatarScrollcss";
// import "./style.css";

 
import { ZLogo } from "zitics-core-ui";
 
const ActiveSwitchTab =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/ActiveSwitchTab.svg";
 
const switchTab =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/switchTab.svg";
 
type searchDropdownProps = ButtonProps &
  LinkProps & {
    divOnClick?: () => any;
    options?: any[];
    linkLabel?: any;
    placeholder?: any;
    buttonIcon?: any;
    varient: "small" | "large" | "notification";
  };
 
export const SearchWithDropdown: React.FC<searchDropdownProps> = ({
  buttonIcon,
  placeholder,
  options,
  linkLabel,
  divOnClick,
  varient,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const buttonRef = useRef<any>();
  const styles = useStyle();
 
  const handleButtonClick = () => {
    setIsImageVisible(!isImageVisible);
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
  const [isImageVisible, setIsImageVisible] = useState(false);
 
  return (
    <div>
      <Popover
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
            {isImageVisible === true ? (
              <ZLogo src={ActiveSwitchTab} />
            ) : (
              <ZLogo src={switchTab} />
            )}
            {/* <div className={styles.buttonIcon}>{buttonIcon}</div> */}
          </div>
        </PopoverTrigger>
 
        <PopoverSurface className={styles.popoverSurface} tabIndex={-1}>
          <div
            // eslint-disable-next-line eqeqeq
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
                    <div className={styles.option} onClick={divOnClick}>
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