import { CheckboxProps } from "@fluentui/react-components";

export interface ZCheckboxProps extends CheckboxProps {
  Zlabel: string;
  Zcheckboxlabel: string[];
  className?: string;
  style?: React.CSSProperties;
  isVisible?: boolean;
  disabled?: boolean;
}
