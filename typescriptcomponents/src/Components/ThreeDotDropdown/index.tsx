import * as React from "react";
import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Image,
  Button,
  Divider,
  mergeClasses,
} from "@fluentui/react-components";
import ImgDot from "./threedot.svg";
import { useStyles } from "./style";

interface MenuItemProps {
  label: string;
  imageSrc: string;
  onClick?: () => void;
}

interface MenuProps {
  items: MenuItemProps[];
  ZclassName?: string;
  ZContentclassName?: string;
  onChange?: (label: string) => void;
}

export const ThreeDotDropdown: React.FC<Partial<MenuProps>> = ({
  items = [],
  ZclassName,
  ZContentclassName,
  onChange,
}) => {
  const handleItemClick = (label: string, onClick?: () => void) => {
    if (onClick) {
      onClick();
    }
    if (onChange) {
      onChange(label);
    }
  };
  const classes = useStyles();
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button className={mergeClasses(classes.ZButton, ZclassName)}>
          <Image src={ImgDot} />
        </Button>
      </MenuTrigger>

      <MenuPopover className={mergeClasses(classes.ZMenuPopOver, ZContentclassName)}>
        <MenuList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem
                onClick={() => handleItemClick(item.label, item.onClick)}
              >
                <div className={classes.ZMenuItem}>
                  <Image src={item.imageSrc} className={classes.ZImage} />
                  <span>{item.label}</span>
                </div>
              </MenuItem>
              {index < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
