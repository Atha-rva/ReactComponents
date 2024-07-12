import * as React from "react";
import { makeStyles, useId, Input, Label, makeStaticStyles, shorthands, Field } from "@fluentui/react-components";

const inputarray=["Email*"]
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
  Input: {
    height: "40px",
    borderRadius: "10px",
    ...shorthands.border("1px", "solid", "black"),
  }
});

const useGlobalStyles = makeStaticStyles({
  ".r1oeeo9n::after": {
    borderBottom: "none !important",
  },
});

type InputProps = {
  fieldName: string;
};


export const InputComponent: React.FC<Partial<InputProps>> = ({fieldName}) => {
  const styles = useStyles();
  useGlobalStyles();

  return (
    <form noValidate autoComplete="off" className={styles.root}>
      {inputarray.map((fieldName,index) => {
        return (
          <Field label={fieldName} key={index}>
            <Input className={styles.Input} />
          </Field>
          )
      })

      }
    </form>
  );
};