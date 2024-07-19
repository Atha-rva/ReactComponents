import { useEffect, useRef, useState } from "react";
import { ZButton, ZLogo } from "zitics-core-ui";
// import {
//   statusIcon,
//   statusArrowTable,
//   statusCorrectIcon,
//   statusDraftIcon,
//   statusPendingIcon,
//   statusRejectedIcon,
//   correctTick,
// } from "../../../../../assets/Images";
import useStyles from "./style";
import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  makeStyles,
} from "@fluentui/react-components";

const usePopoverStyles = makeStyles({
  popoverContent: {
    padding: "10px",
    width: "200px",
  },
  popoverItem: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    cursor: "pointer",
  },
  popoverItemSelected: {
    backgroundColor: "#e0e0e0",
  },
  popoverLine: {
    margin: "5px 0",
  },
});

export const OrganisationStatus = ({
  handleSetSelectedItems,
}: {
  handleSetSelectedItems: any;
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const classes = useStyles();
  const popoverClasses = usePopoverStyles();

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
          <ZLogo className={classes.zdropdownIcon} />
        );
      case "Draft":
        return (
          <ZLogo className={classes.zdropdownIcon}/>
        );
      case "Pending":
        return (
          <ZLogo className={classes.zdropdownIcon}  />
        );
      case "Rejected":
        return (
          <ZLogo className={classes.zdropdownIcon}  />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    handleSetSelectedItems(selectedItems);
  }, [selectedItems, handleSetSelectedItems]);

  return (
    <Popover>
      <PopoverTrigger>
        <ZButton
          className={classes.ZiconBtn}
          appearance="transparent"
          variant="secondary"
        >
          <img  alt="Description" />
          &nbsp;&nbsp;
          <img alt="status" />
        </ZButton>
      </PopoverTrigger>
      <PopoverSurface className={popoverClasses.popoverContent} tabIndex={-1}>
        {["Active", "Draft", "Pending", "Rejected"].map((item, index) => (
          <div
            key={item}
            className={`${popoverClasses.popoverItem} ${
              isItemSelected(item) ? popoverClasses.popoverItemSelected : ""
            }`}
            onClick={() => handleItemClick(item)}
          >
            {getItemIcon(item)}
            {item}
            {isItemSelected(item) && (
              <img

                className={classes.zdropdownlogoSelection}
                alt="correctTickImg"
              />
            )}
            {index !== 3 && <hr className={popoverClasses.popoverLine} />}
          </div>
        ))}
      </PopoverSurface>
    </Popover>
  );
};
