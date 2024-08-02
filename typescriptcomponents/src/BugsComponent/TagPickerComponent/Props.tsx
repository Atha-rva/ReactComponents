import { DropdownProps } from "@fluentui/react-components";

export interface DropdownComponentInfo {
  key: string | undefined;
  info: {
    value: string[];
    validState: "none" | "valid" | "invalid"
  }
}

export type dropdowntype = Partial<DropdownProps> & {
  zoptions: string[];
  zlabel?: string;
  zvalidState?: "none" | "valid" | "invalid";
  zrequired?: boolean;
  handleChange?: (componentInfo: DropdownComponentInfo)=>void;
  onSelectOption?: (options: string[]) => void;
  selectedOptions?: string[];
};
