import * as React from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    "> div": { padding: "20px" },
  },
});

export const SpinnerContainer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Label Position for a Spinner
      </h1>
      <Spinner labelPosition="before" label="Label Position Before..." />

      <Spinner labelPosition="after" label="Label Position After..." />

      <Spinner labelPosition="above" label="Label Position Above..." />

      <Spinner labelPosition="below" label="Label Position Below..." />

      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Size of a Spinner
      </h1>
      <Spinner
        labelPosition="before"
        label="Label Position Before..."
        size="tiny"
      />

      <Spinner
        labelPosition="before"
        label="Label Position After..."
        size="small"
      />

      <Spinner
        labelPosition="before"
        label="Label Position Above..."
        size="medium"
      />

      <Spinner
        labelPosition="before"
        label="Label Position Below..."
        size="large"
      />

      <Spinner
        labelPosition="before"
        label="Label Position Below..."
        size="extra-tiny"
      />

      <Spinner
        labelPosition="before"
        label="Label Position Below..."
        size="extra-small"
      />

      <Spinner
        labelPosition="before"
        label="Label Position Below..."
        size="extra-large"
      />
    </div>
  );
};
