import React from "react";
import { MoreVerticalFilled } from "@fluentui/react-icons";
import { useStyles } from "./style";
import { mergeClasses } from "zitics-core-ui";

interface ZThreeDotHamburgProps {
  className?: string;
  style?: React.CSSProperties;
}

const ZThreeDotHamburg: React.FC<Partial<ZThreeDotHamburgProps>> = ({
  className,
  style,
}) => {
  const styles = useStyles();
  return (
    <div className={mergeClasses(styles.ThreeDot, className)} style={style}>
      <MoreVerticalFilled className={styles.ThreeDotImg} />
    </div>
  );
};

export default ZThreeDotHamburg;
