import React, { useId } from "react";
import { Dropdown, makeStyles, Option } from "@fluentui/react-components";
import type { DropdownProps } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gridTemplateRows: "repeat(1fr)",
    justifyItems: "Start",
    gap: "2px",
    maxWidth: "400px",
  },
});

export const LanguageDropdown = (props: Partial<DropdownProps>) => {
  const dropdownId = useId();
  const options = [
    "Punjabi",
    "Hindi",
    "English",
    "French",
    "Spanish",
    "German",
    "Chinese",
    "Italian",
    "Dutch",
    "Russian",
    "Arabic",
    "Portuguese",
    "Turkish",
    "Polish",
    "Czech",
    "Slovak",
  ];
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Dropdown placeholder="Select the langauage" {...props}>
        {options.map((option) => (
          <Option key={option} disabled={option === "Punjabi"}>
            {option}
          </Option>
        ))}
      </Dropdown>
    </div>
  );
};
