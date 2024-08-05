import {
    makeStyles,
    mergeClasses,
    shorthands,
  } from "@fluentui/react-components";
  import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
  import {
    fontSize,
    fontWeight,
  } from "../../assets/desginPattern/font/FontSize/fontSize";
  const useStyles = makeStyles({
    div: {
      height: "22px",
      width: "39px",
      background: "linear-gradient(115deg, #778AEA 9.36%, #C769E9 95.32%)",
      borderRadius: "8px",
      color: colorSchema.grays.defaultBackground,
      fontSize: fontSize.Body_12_R,
      fontWeight: fontWeight.fontWeight600,
      textAlign: "center",
      fontFamily: "Lato",
      ...shorthands.padding("1px", "2px"),
    },
  });
  
  const CompletionStatusIcon = ({ children }: { children: string }) => {
    const classess = useStyles();
  
    return <div className={mergeClasses(classess.div)}>{children}</div>;
  };
  
  export default CompletionStatusIcon;