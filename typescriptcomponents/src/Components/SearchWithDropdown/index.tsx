import React, { useRef, useState } from "react";
import {
  ButtonProps,
  Link,
  LinkProps,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  SearchBox,
  makeStyles,
  Tab,
  TabList,
  SelectTabData,
  SelectTabEvent,
  Divider,
} from "@fluentui/react-components";
import { useStyle } from "./searchdropdwonStyle";
import "./style.css";
import notification from "./notification.svg";
import notificationActive from "./notificationActive.svg";
import greenStatus from "./greenStatus.svg";

import { ZLogo, ZSpanHref } from "zitics-core-ui";

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
            className={varient === "large" ? styles.mainDiv1 : styles.mainDiv}
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

type NotificationPopoverProps = {
  btnData: any;
  tabs: {
    heading: {
      label: string;
      notificationNum: number;
    };
    data: {
      label: string;
      time: string;
      read: boolean;
    }[];
  }[];
  label?: string;
};

export const NotificationPopover: React.FC<NotificationPopoverProps> = ({
  tabs,
  btnData,
  label,
}) => {
  const [isSet, setSet] = useState(false);
  const handleClick = () => {
    setSet(!isSet);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger disableButtonEnhancement>
          <div
            onClick={handleClick}
            style={{
              width: "40px",
            }}
          >
            {isSet === true ? (
              <img src={notificationActive} alt="Active notification" />
            ) : (
              <img src={notification} alt="Notification" />
            )}
          </div>
        </PopoverTrigger>
        <PopoverSurface style={{ borderRadius: "15px" }} tabIndex={-1}>
          <h3 style={{ margin: "auto" }}>{label}</h3>
          <WithPanels tabs={tabs} />
        </PopoverSurface>
      </Popover>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: "20px",
    minWidth: "200px",
    width: "100%",
  },
  panels: {
    padding: "6px",
    width: "100%",
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "-12px",
    width: "100%",
  },
  tabHeadingActive: {
    padding: "4px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    color: "#EBEBEB",
    backgroundColor: "#33CC99",
  },
  tabNotificationActive: {
    color: "#33CC99",
    backgroundColor: "#EBEBEB",
    minWidth: "20px",
    borderRadius: "45%",
  },
  tabHeading: {
    padding: "4px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    gap: "5px",
    color: "#242424",
    backgroundColor: "#EBEBEB",
  },
  tabNotification: {
    color: "#EBEBEB",
    backgroundColor: "#616161",
    minWidth: "20px",
    borderRadius: "45%",
  },
  scrollPanel: {
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Change color here for more visibility
      borderRadius: "10px",
      border: "2px solid transparent",
      backgroundClip: "content-box",
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    maxHeight: "198px",
    overflowY: "auto",
    minWidth: "200px",
    width: "100%",
  },
});

const WithPanels: React.FC<{ tabs: NotificationPopoverProps["tabs"] }> = ({
  tabs,
}) => {
  const stylesa = useStyles();

  const [selectedValue, setSelectedValue] = React.useState<string>(
    tabs[0]?.heading?.label || ""
  );

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value as string);
  };

  return (
    <div className={stylesa.root}>
      <TabList
        className={stylesa.tabList}
        selectedValue={selectedValue}
        onTabSelect={onTabSelect}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} id={tab.heading.label} value={tab.heading.label}>
            <div
              className={
                selectedValue === tab.heading.label
                  ? stylesa.tabHeadingActive
                  : stylesa.tabHeading
              }
            >
              {tab.heading.label}
              <div
                className={
                  selectedValue === tab.heading.label
                    ? stylesa.tabNotificationActive
                    : stylesa.tabNotification
                }
              >
                {tab.heading.notificationNum}
              </div>
            </div>
          </Tab>
        ))}
      </TabList>
      <hr
        style={{
          border: "2px solid #EBEBEB",
          width: "106%",
          marginLeft: "-10px",
          marginTop: "-23px",
        }}
      />
      <div className={stylesa.panels}>
        {tabs.map(
          (tab, index) =>
            selectedValue === tab.heading.label && (
              <div
                key={index}
                role="tabpanel"
                aria-labelledby={tab.heading.label}
                className={stylesa.scrollPanel}
              >
                {tab.data.map((entry, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        minWidth: "200px",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          wordBreak: "break-word",
                        }}
                      >
                        <div style={{ textWrap: "wrap" }}>{entry.label}</div>
                        <div style={{ fontSize: "10px", color: "#C7C7C7" }}>
                          {entry.time}
                        </div>
                      </div>
                      <div style={{ alignContent: "center" }}>
                        {entry.read && (
                          <img src={greenStatus} alt="Unread Status" />
                        )}
                      </div>
                    </div>
                    <Divider
                      style={{
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            )
        )}
        <div
          style={{
            maxHeight: "2px",
            paddingTop: "15px",
            paddingBottom: "10px",
          }}
        >
          <ZSpanHref children="See All" link={"https://zitics.com/"} />
        </div>
      </div>
    </div>
  );
};
