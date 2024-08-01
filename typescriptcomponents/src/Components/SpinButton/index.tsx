import * as React from "react";
import {
  useId,
  Label,
  SpinButton,
  mergeClasses,
} from "@fluentui/react-components";
import type { SpinButtonProps } from "@fluentui/react-components";
import { useStyles, useStaticStyles } from "./style";

interface ZSpinBtnProps {
  zlabel?: string;
  zdefaultvalue?: number;
  zmin?: number;
  zmax?: number;
  zdisabled?: boolean;
  zhide?: boolean;
  className?: string;
}

type FormatterFn = (value: number) => string;
type ParserFn = (formattedValue: string) => number;

const ZSpinButton: React.FC<Partial<ZSpinBtnProps & SpinButtonProps>> = ({
  zlabel,
  zdefaultvalue,
  zdisabled,
  zhide,
  className,
  zmax,
  zmin,
}) => {
  const formatter: FormatterFn = (value) => {
    return `${value} Months`;
  };

  const parser: ParserFn = (formattedValue) => {
    if (formattedValue === null) {
      return NaN;
    }

    return parseFloat(formattedValue.replace(" Months", ""));
  };

  const onSpinButtonChange: SpinButtonProps["onChange"] = (_ev, data) => {
    if (data.value !== undefined && data.value !== null) {
      setSpinButtonValue(data.value);
      setSpinButtonDisplayValue(formatter(data.value));
    } else if (data.displayValue !== undefined) {
      const newValue = parser(data.displayValue);
      if (!Number.isNaN(newValue)) {
        setSpinButtonValue(newValue);
        setSpinButtonDisplayValue(formatter(newValue));
      } else {
        setSpinButtonValue(null);
        setSpinButtonDisplayValue("(null)");
      }
    }
  };

  const classes = useStyles();
  useStaticStyles();
  const id = useId();
  const [spinButtonValue, setSpinButtonValue] = React.useState<number | null>(
    0
  );
  const [spinButtonDisplayValue, setSpinButtonDisplayValue] = React.useState(
    formatter(0)
  );

  if (zhide) {
    return null;
  }

  return (
    <div className={classes.base}>
      <Label htmlFor={id}>{zlabel}</Label>
      <SpinButton
        className={mergeClasses(classes.root, className)}
        value={spinButtonValue}
        displayValue={spinButtonDisplayValue}
        onChange={onSpinButtonChange}
        id={id}
        defaultValue={zdefaultvalue}
        min={zmin}
        max={zmax}
        disabled={zdisabled}
      />
    </div>
  );
};

export default ZSpinButton;
