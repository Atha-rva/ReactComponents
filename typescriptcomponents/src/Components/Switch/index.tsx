import * as React from "react";
import { Field, Switch, makeStaticStyles } from "@fluentui/react-components";

interface SwitchLabelProps {
  labels: string[];
  switchisabled: boolean;
  hideswitch: boolean;
}

const useStaticStyles = makeStaticStyles({
  ".rsji9ng:enabled:checked ~ .fui-Switch__indicator": {
    backgroundColor: "black",
  },
  ".rsji9ng:enabled:checked:hover ~ .fui-Switch__indicator": {
    backgroundColor: "#616161",
  },
});

const wrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "100%",
};

export const SwitchLabel: React.FC<Partial<SwitchLabelProps>> = ({
  labels,
  switchisabled,
  hideswitch,
}) => {
  useStaticStyles();

  const [checked, setChecked] = React.useState(false);

  const [checked2, setChecked2] = React.useState(false);
  const onChange2 = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setChecked2(ev.currentTarget.checked);
    },
    [setChecked2]
  );

  const checkedString2 = checked2 ? "On" : "Off";

  if (hideswitch) {
    return null;
  }
  return (
    <div style={wrapperStyle}>
      {labels?.map((labelName, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }} key={index}>
            <label style={{ marginLeft: "8px" }}>{labelName}</label>
            <Switch
              disabled={switchisabled}
              label={`${checkedString2}`}
              labelPosition="after"
              onChange={onChange2}
            />
          </div>
        );
      })}
    </div>
  );
};
