import { ButtonProps, LinkProps } from "@fluentui/react-components";

export type searchDropdownProps = ButtonProps &
  LinkProps & {
    onOptionClick?: () => any;
    onLinkClick?: () => any;
    options?: any[];
    linkLabel?: any;
    placeholder?: any;
    buttonIcon?: any;
    varient: "small" | "large";
  };
