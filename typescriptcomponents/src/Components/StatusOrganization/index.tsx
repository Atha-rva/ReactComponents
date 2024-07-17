import { useEffect, useRef, useState } from "react";

import statusCorrectIcon from "../../images/Correct.svg";
import statusDraftIcon from "../../images/Draft.svg";
import statusPendingIcon from "../../images/Pending.svg";
import statusRejectedIcon from "../../images/Wrong.svg";
import correctTick from "../../images/CorrectTick.svg";
import statusIcon from "../../images/status.svg";
import statusArrowTable from "../../images/statusArrowTable.svg";


import useStyles from "./style";


import { Button, Image } from "@fluentui/react-components";

export const OrganisationStatus = ({
  handleSetSelectedItems,
}: {
  handleSetSelectedItems: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string): void => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isItemSelected = (item: string): boolean => {
    return selectedItems.includes(item);
  };

  const getItemIcon = (item: string) => {
    switch (item) {
      case "Active":
        return (
          <Image className={classes.zdropdownIcon} src={statusCorrectIcon} />
        );
      case "Draft":
        return (
          <Image className={classes.zdropdownIcon} src={statusDraftIcon} />
        );
      case "Pending":
        return (
          <Image className={classes.zdropdownIcon} src={statusPendingIcon} />
        );
      case "Rejected":
        return (
          <Image className={classes.zdropdownIcon} src={statusRejectedIcon} />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);


  const classes = useStyles();
  return (
    <div ref={dropdownRef}>
      <Button
        className={classes.ZiconBtn}
        appearance="transparent"
        onClick={toggleDropdown}
      >
        <img src={statusIcon} alt="Description" />
        &nbsp;&nbsp;
        <img src={isOpen ? statusArrowTable : statusArrowTable} alt="status" />
      </Button>
      {isOpen && (
        <div className={classes.zdropdownContainer}>
          {["Active", "Draft", "Pending", "Rejected"].map((item, index) => (
            <div
              onClick={() => {
              }}
              key={item}
            >
              <p
                className={classes.zdropdownContent}
                onClick={() => handleItemClick(item)}
              >
                {getItemIcon(item)}
                {item}
                {isItemSelected(item) && (
                  <img
                    src={correctTick}
                    className={classes.zdropdownlogoSelection}
                    alt="correctTickImg"
                  />
                )}
              </p>
              {index !== 3 && <hr className={classes.zdropdownLine} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
