import React from "react";
import { makeStyles } from "zitics-core-ui";

interface CustomScrollbarProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

const useStyles = makeStyles({
  customScrollbar: {
    position: "relative",
    overflow: "auto",
    width: "100%",
    height: "100%",
    "::-webkit-scrollbar": {
      width: "2px",
      height:"40px",
    },
    "::-webkit-scrollbar-track": {
      background: "none !important",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#c7c7c7",
      borderRadius: "6px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#9c9b9b",
    },
    "::-webkit-scrollbar-corner": {
      background: "transparent",
    },
  },
});

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
  children,
  width = "100%",
  height = "100%",
  className,
}) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.customScrollbar} ${className || ""}`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
};

export default CustomScrollbar;
