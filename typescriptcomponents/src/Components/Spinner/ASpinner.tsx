import {
  makeStaticStyles,
  mergeClasses,
  Spinner,
} from "@fluentui/react-components";
import React from "react";
import { useStyles } from "./Style";

interface SpinnerProps {
  size?:
    | "small"
    | "medium"
    | "large"
    | "extra-tiny"
    | "tiny"
    | "extra-small"
    | "extra-large"
    | "huge"
    | undefined;
  label?: string;
  labelPosition?: "after" | "above" | "below" | "before" | undefined;
  className?: string;
  style?: React.CSSProperties;
}

const useStaticStyles = makeStaticStyles({
  ".rvgcg50": {
    color: "black",
  },
  ".fa3u9ii": {
    width: "40px",
    height: "40px",
  },
});

const ASpinner: React.FC<SpinnerProps> = ({
  size = "medium",
  label = "",
  labelPosition = "after",
  className,
  style,
}) => {
  useStaticStyles();
  const classes = useStyles();
  return (
    <div style={style}>
      <Spinner
        className={mergeClasses(classes.SpinnerContainer, className)}
        label={label}
        labelPosition={labelPosition}
        size={size}
      />
    </div>
  );
};

export default ASpinner;
