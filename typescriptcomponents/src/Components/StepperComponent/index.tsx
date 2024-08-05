import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    mergeClasses,
  } from "@fluentui/react-components";
  import { useStaticStyles, useStyles } from "./ZAccordionStyle";
//   import { steeperComplete } from "../../assets/Images/Images";
  import CompletionStatusIcon from "./CompletionStatusIcon";
  import React, { useEffect, useState } from "react";
  import { AccordionPanelType, ZAccordionProps } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
  

const steeperComplete =
    "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/SteeperComplete.svg";
  

  const ZAccordion: React.FC<ZAccordionProps> = (props) => {
    Lato();
    useStaticStyles();
    const styles = useStyles();
    const {
      zpanels,
      className,
      style,
      zaacordionHeaderClassName,
      zaccordionItemClassName,
      zaccordionPanelClassName,
      zaccordionPanelStyle,
      zaacordionHeaderStyle,
      zaccordionItemStyle,
      isVisible = true,
      disabled = false,
    } = props;
    const [panels, setPanels] = useState<AccordionPanelType[]>(zpanels);
    const [openItem, setOpenItem] = useState<number>(-1);
  
    useEffect(() => {
      setPanels(zpanels);
    }, [zpanels]);
  
    return (
      <Accordion
        className={mergeClasses(
          styles.accordion,
          className,
          !isVisible && styles.invisible,
          disabled && styles.disabled
        )}
        style={style}
        collapsible
      >
        {panels.map((panel, panelIndex) => {
          const isDisabled = panel.disabled ?? false;
          return (
            <>
              <AccordionItem
                value={panelIndex}
                onClick={() => {
                  if (!isDisabled) {
                    setOpenItem(panelIndex);
                  }
                }}
                className={mergeClasses(
                  styles.inactiveItem,
                  zaccordionItemClassName,
                  openItem === panelIndex ? styles.openItem : "",
                  isDisabled ? styles.disabledItem : ""
                )}
                style={zaccordionItemStyle}
                aria-disabled={isDisabled}
              >
                <AccordionHeader
                  className={mergeClasses(
                    styles.header,
                    zaacordionHeaderClassName
                  )}
                  style={zaacordionHeaderStyle}
                  expandIconPosition="end"
                >
                  <ul className={mergeClasses(styles.headerUl)}>
                    <div className={mergeClasses(styles.statusAndHeading)}>
                      <li>
                        {panel.completeStatus === "100" ? (
                          <img src={steeperComplete} alt="Steeper complete" />
                        ) : panel.isActive === false ? (
                          <div className={styles.Steeper}></div>
                        ) : (
                          <div className={styles.stepperActive}></div>
                        )}
                      </li>
                      <li>{panel.label}</li>
                    </div>
                    <div className={mergeClasses(styles.avatarAndPercent)}>
                      <li>{panel.avatar}</li>
                      <li className={styles.statusPercent}>
                        {" "}
                        <CompletionStatusIcon>{`${panel.completeStatus}%`}</CompletionStatusIcon>
                      </li>
                    </div>
                  </ul>
                </AccordionHeader>
                <AccordionPanel
                  className={mergeClasses(styles.panel, zaccordionPanelClassName)}
                  style={zaccordionPanelStyle}
                >
                  {panel.component}
                </AccordionPanel>
              </AccordionItem>
              <br />
            </>
          );
        })}
      </Accordion>
    );
  };
  
  export { ZAccordion };
  