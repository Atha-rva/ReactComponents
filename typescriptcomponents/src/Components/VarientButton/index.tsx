import * as React from "react";
import { makeStyles, Button, shorthands } from "@fluentui/react-components";

interface ButtonConfig {
  className: string;
  appearance: 'primary' | 'outline';  // or any other appearances your design system supports
  label: string;
  disabled: boolean;
}

const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  VarientBtn1: {
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#242424",
    width: "160px",
    "&:hover": {
      backgroundColor: "#242424",
      color: "#FFFFFF",
    },
    "&:active": {
      backgroundColor: "#242424",
      color: "#FFFFFF",
    },
  },
  VarientBtn2: {
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#33CC99",
    width: "160px",
    "&:hover": {
      backgroundColor: "linear-gradient(45deg, #33CC99, #33C3CC)",
      color: "#FFFFFF",
    },
    "&:active": {
      backgroundColor: "#33CC99",
      color: "#FFFFFF",
    },
  },
  VarientBtn3: {
    height: "30px",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", "#242424"),
    width: "120px",
  },
});

const buttonConfigs: ButtonConfig[] = [
  { className: "VarientBtn1", appearance: "primary", disabled: true, label: "Submit" },
  { className: "VarientBtn2", appearance: "primary", disabled: false, label: "Add" },
  { className: "VarientBtn3", appearance: "outline", disabled: false, label: "Add Proposal" },
];

export const AppearanceBtn: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      {buttonConfigs.map((btn, index) => (
        <Button
          key={index}
          className={styles[btn.className as keyof typeof styles]}
          appearance={btn.appearance}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};
