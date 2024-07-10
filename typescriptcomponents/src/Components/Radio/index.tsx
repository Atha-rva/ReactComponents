import { Field, Radio, RadioGroup } from "@fluentui/react-components";
import React from "react";
import { useStyles } from "./indexcss";

interface RadioProps {
  ZradioLabel: string;
  Zvalue: string[];
}

const ZRadio: React.FC<RadioProps> = ({ ZradioLabel, Zvalue }) => {
  const classes = useStyles();
  return (
      <Field >
      <label style={{ marginLeft: "10px", fontSize: "14px" }}>{ZradioLabel}</label>
      <RadioGroup layout="horizontal">
        {Zvalue.map((activity, index) => (
          <Radio
            key={index}
            className={classes.ZRadioroot}
            value={activity}
            label={activity}
          />
        ))}
      </RadioGroup>
    </Field>
  );
};

export default ZRadio;
