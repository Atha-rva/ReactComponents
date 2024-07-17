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
} from "@fluentui/react-components";
import ImgDot from "./threedot.svg";

interface MenuItemProps {
  label: string;
  imageSrc: string;
}

interface MenuProps {
  items: MenuItemProps[];
  ZclassName: string;
  ZContentclassName: string;
  Zstyle: React.CSSProperties;
}

export const ThreeDotDropdown: React.FC<Partial<MenuProps>> = ({
  items = [],
  ZclassName,
  ZContentclassName,
  Zstyle,
}) => {
  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          className={ZclassName}
          style={{ marginLeft: "50px", border: "none", width: "20px" }}
        >
          <Image src={ImgDot} />
        </Button>
      </MenuTrigger>

      <MenuPopover
        className={ZContentclassName}
        style={{
          borderRadius: "10px",
          width: "77px",
          border: "1px solid #A869E9",
        }}
      >
        <MenuList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem>
                <div
                  style={{ display: "flex", gap: "9px", alignItems: "center" }}
                >
                  <Image
                    src={item.imageSrc}
                    style={{ height: "12px", width: "12px" }}
                  />
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
