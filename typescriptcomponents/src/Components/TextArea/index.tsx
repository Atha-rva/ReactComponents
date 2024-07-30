import {
  Field,
  makeStaticStyles,
  makeStyles,
  mergeClasses,
  Textarea,
} from "@fluentui/react-components";
import React from "react";

interface FieldProps {
  zlabel?: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const useStaticStyles = makeStaticStyles({
  ".fhz96rm": {
    border: "none",
    overflow: "hidden",
  },
  ".f9mts5e:hover": {
    border: "none !important",
    overflow: "hidden",
  },
  ".f1yiegib": {
    border: "none !important",
    overflow: "hidden",
  },
  ".f1mnjydx::after": {
    border: "none !important",
    overflow: "hidden",
  },
});

const useStyles = makeStyles({
  root: {
    ">textarea": {
      border: "1px solid #616161",
      borderRadius: "10px",
      overflow: "hidden",
    },
  },
});

const ZTextArea: React.FC<Partial<FieldProps>> = ({
  zlabel,
  placeholder,
  className,
  style,
}) => {
  useStaticStyles();
  const classes = useStyles();
  return (
    <div>
      <Field label={zlabel}>
        <Textarea
          placeholder={placeholder}
          className={mergeClasses(classes.root, className)}
          style={style}
        />
      </Field>
    </div>
  );
};

export default ZTextArea;

