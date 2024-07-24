import React, { useState } from "react";
import { ChevronLeftFilled, ChevronRightFilled } from "@fluentui/react-icons";
import { useStyles } from "./style";

const ZNavigateArrow: React.FC = () => {
  const classes = useStyles();
  const [leftIconSelected, setLeftIconSelected] = useState(false);
  const [rightIconSelected, setRightIconSelected] = useState(true);

  const handleLeftClick = () => {
    setLeftIconSelected(true);
    setRightIconSelected(false);
  };

  const handleRightClick = () => {
    setLeftIconSelected(false);
    setRightIconSelected(true);
  };

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.icon}>
          <ChevronLeftFilled
            style={{
              fontSize: "24px",
              color: leftIconSelected ? "#000" : "grey",
            }}
            onClick={handleLeftClick}
          />
        </div>
        <div className={classes.icon}>
          <ChevronRightFilled
            style={{
              fontSize: "24px",
              color: rightIconSelected ? "#000" : "grey",
            }}
            onClick={handleRightClick}
          />
        </div>
      </div>
    </div>
  );
};

export { ZNavigateArrow };
