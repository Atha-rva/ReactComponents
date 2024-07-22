import { DropdownProps } from "@fluentui/react-components";
 
export type dropdowntype = Partial<DropdownProps> & {
  zoptions: string[];
  zlabel?: string;
  zvalidState?: "none" | "valid" | "invalid";
  zrequired?: boolean;
};