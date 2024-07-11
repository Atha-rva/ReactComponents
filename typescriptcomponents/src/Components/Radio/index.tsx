import { Field, Radio, RadioGroup } from "@fluentui/react-components";
import React from "react";
import { useStyles } from "./indexcss";

interface RadioProps {
  ZradioLabel: string;
  Zvalue: string[];
  Zdisabled: boolean;
  zhide: boolean;
}

const ZRadio: React.FC<RadioProps> = ({ ZradioLabel, Zvalue , Zdisabled , zhide }) => {
  const classes = useStyles();

  if (zhide) {
    return null;
  }
  return (
    <Field>
      <label style={{ marginLeft: "10px", fontSize: "14px" }}>
        {ZradioLabel}
      </label>
      <RadioGroup layout="horizontal">
        {Zvalue.map((activity, index) => (
          <Radio
            disabled={Zdisabled}
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
