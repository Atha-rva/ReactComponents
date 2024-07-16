import { Checkbox, CheckboxProps, Field } from "@fluentui/react-components";
import React from "react";
import { makeStaticStyles, makeStyles } from "zitics-core-ui";

type MyComponentProps = CheckboxProps & {
  Zlabel: string;
  Zcheckboxlabel: string[];
  className?: string;
  style?: React.CSSProperties;
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
  ...props
}) => {
  const styles = useStyles();
  useStaticStyles();

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
            {...props}
          />
        ))}
      </div>
    </Field>
  );
};

export default ZCheckBoxBtn;
