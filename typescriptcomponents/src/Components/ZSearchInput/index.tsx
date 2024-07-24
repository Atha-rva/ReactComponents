import * as React from "react";
import { Input, Label, mergeClasses } from "@fluentui/react-components";
import { Search24Regular } from "@fluentui/react-icons";
import { useStyles, useStaticStyles } from "./style";

interface ZSearchInputProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ZSearchInput: React.FC<Partial<ZSearchInputProps>> = ({
  className,
  style,
  label,
  onClick,
  onChange,
}) => {
  const styles = useStyles();
  useStaticStyles();

  const [value, setValue] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      console.log(value);
    }
  };

  return (
    <div className={styles.root}>
      <div>
        <Label size="medium" aria-placeholder="Enter the Value">
          {label}
        </Label>
        <Input
          placeholder="Search"
          className={mergeClasses(styles.Input, className)}
          style={style}
          size="medium"
          contentBefore={
            <Search24Regular
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
          }
          onClick={onClick}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
      </div>
    </div>
  );
};
