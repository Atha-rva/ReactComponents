import { DropdownProps } from "@fluentui/react-components";

type dropdowntype = Partial<DropdownProps> & {
  zoptions: string[];
  zlabel?: string;
  zvalidState?: "none" | "valid" | "invalid";
  zrequired?: boolean;
};

export type { dropdowntype };
