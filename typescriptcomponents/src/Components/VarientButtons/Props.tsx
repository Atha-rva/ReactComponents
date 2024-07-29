import { ButtonProps } from "@fluentui/react-components";

export type zButtonProps = ButtonProps & {
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "colorHold"
    | "transparent"
    | "default"
    | "linearGradiant"
    | "borderColor"
    | "eyeButton"
    | "secondaryBorder";
  className?: string;
  onClick?: () => void;
};
