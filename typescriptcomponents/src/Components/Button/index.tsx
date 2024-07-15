import * as React from "react";
import { makeStyles, Button } from "@fluentui/react-components";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";

interface AppearanceBtnProps{
  style: React.CSSProperties;
}



const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  AButton: {
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#242424",
    color: "#FFFFFF",
    width: "300px",
  },
});

export const Appearance: React.FC<Partial<AppearanceBtnProps>> = ({style}) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Button className={styles.AButton} style={style}>Add</Button>
      {/* <Button appearance="primary" >
        Primary
      </Button>
      <Button appearance="outline">
        Outline
      </Button>
      <Button appearance="subtle" >
        Subtle
      </Button>
      <Button appearance="transparent" >
        Transparent
      </Button> */}
    </div>
  );
};
