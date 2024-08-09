import { Checkbox, CheckboxProps, Field } from "@fluentui/react-components";
import React, { useState } from "react";
import { makeStaticStyles, makeStyles } from "zitics-core-ui";

type MyComponentProps = CheckboxProps & {
  Zlabel: string;
  Zcheckboxlabel: string[];
  className?: string;
  style?: React.CSSProperties;
  onOptionSelect?: (selectedValues: string[]) => void; // Add this prop
};

const useStaticStyles = makeStaticStyles({
  ".f64fuq3": {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
  },
  ".rl7ci6d": {
    color: "white",
  },
});

const useStyles = makeStyles({
  label: {
    marginLeft: "10px",
    fontSize: "14px",
  },
  checkboxContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
  },
});

const ZCheckBoxBtn: React.FC<MyComponentProps> = ({
  Zlabel = "",
  Zcheckboxlabel = [],
  className = "",
  style = {},
  onOptionSelect,
  ...props
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const styles = useStyles();
  useStaticStyles();

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const newSelectedValues = event.target.checked
      ? [...selectedValues, value]
      : selectedValues.filter((v) => v !== value);

    setSelectedValues(newSelectedValues);

    if (onOptionSelect) {
      onOptionSelect(newSelectedValues);
    }
  };

  return (
    <Field>
      <label style={{ marginLeft: "8px" }}>{Zlabel}</label>
      <div className={styles.checkboxContainer}>
        {Zcheckboxlabel.map((activity, index) => (
          <Checkbox
            className={className}
            key={index}
            size="large"
            label={activity}
            style={style}
            onChange={(e) => handleCheckboxChange(e, activity)}
            {...props}
          />
        ))}
      </div>
    </Field>
  );
};

export default ZCheckBoxBtn;
