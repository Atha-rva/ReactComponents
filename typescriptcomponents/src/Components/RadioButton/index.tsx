import * as React from "react";
import {
  Field,
  makeStaticStyles,
  Radio,
  RadioGroup,
  shorthands,
} from "@fluentui/react-components";



const useStaticStyles = makeStaticStyles({
  ".rg1upok:enabled:checked ~ .fui-Radio__indicator": {
    borderColor: "black",
    color: "black",
    width: "30px",
    height: "30px",
  },
  ".rg1upok:enabled:checked:hover ~ .fui-Radio__indicator": {
    borderColor: "black",
    color: "black",
  },
  ".rg1upok:enabled:not(:checked) ~ .fui-Radio__indicator": {
    width: "30px",
    height: "30px",
  },
  ".rwtekvw::after": {
    width: "35px",
    height: "35px",
  },
  ".rg1upok:disabled ~ .fui-Radio__indicator": {
    width: "30px",
    height: "30px",
  }
}); 

interface RadioProps {
  ZGlobalLabel: string;
  Zlabel: string[];
  Zhide: boolean;
}

export const RadioBtn: React.FC<Partial<RadioProps>> = ({
  ZGlobalLabel,
  Zlabel,
  Zhide,
}) => {
  useStaticStyles();
  
  if (Zhide) { 
    return null;
  }
  return (
    <Field >
      <label style={{marginLeft:"10px"}} >{ZGlobalLabel}</label>
      <RadioGroup layout="horizontal">
        {Zlabel?.map((label, index) => (
          <Radio key={index} label={label} />
        ))}
      </RadioGroup>
    </Field>
  );
};
