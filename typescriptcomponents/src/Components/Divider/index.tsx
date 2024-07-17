import * as React from "react";
import { useStyles } from "./style";
import { Divider } from "@fluentui/react-components";

export const Line = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider alignContent="start">start</Divider>
      </div>
      <div className={styles.example}>
        <Divider alignContent="center">center (default)</Divider>
      </div>
      <div className={styles.example}>
        <Divider alignContent="end">end</Divider>
      </div>
      <div className={styles.example}>
        <Divider alignContent="start" vertical>
          start
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider alignContent="center" vertical>
          center (default)
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider alignContent="end" vertical>
          end
        </Divider>
        <h2>Custom Styling </h2>
        <div className={styles.example}>
          <Divider className={styles.customWidth}>Custom width (200px)</Divider>
        </div>
      </div>
    </div>
  );
};
