import React from "react";
import { Field, Radio, RadioGroup } from "@fluentui/react-components";

interface RadioBtnProps {
  ZGlobalLabel: string;
  Zlabel: string[];
  className?: string;
  Radioclass?: string;
  RadioGroupclass?: string;
  onChange?: (params: any) => void;
  onBlur?: (params: any) => void;
}

export const RadioBtn: React.FC<RadioBtnProps> = ({
  ZGlobalLabel,
  Zlabel = [],
  className = "",
  Radioclass = "",
  RadioGroupclass = "",
  onChange,
  onBlur,
}) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleRadioBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <Field className={className}>
      <label style={{ marginLeft: "10px" }}>{ZGlobalLabel}</label>
      <RadioGroup layout="horizontal" className={RadioGroupclass}>
        {Zlabel.map((label, index) => (
          <Radio
            key={index}
            label={label}
            className={Radioclass}
            onChange={handleRadioChange}
            onBlur={handleRadioBlur}
          />
        ))}
      </RadioGroup>
    </Field>
  );
};
