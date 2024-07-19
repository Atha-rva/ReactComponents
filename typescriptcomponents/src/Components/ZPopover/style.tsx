import {
    colorSchema,
    fontSize,
    fontWeight,
    makeStyles,
    shorthands,
  } from "zitics-core-ui";
  
  const useStyles = makeStyles({
    zdropdownIcon: {
      width: "15px",
      height: "15px",
      marginRight: "8px",
      verticalAlign: "middle",
    },
    zdropdownContainer: {
      width: "92px",
      height: "120px",
      borderRadius: "10px",
      border: `1px solid ${colorSchema.types.primary1}`,
      position: "absolute",
      backgroundColor: colorSchema.grays.defaultBackground,
      zIndex: "1000 !important",
      fontSize: fontSize.Body_10_R,
      fontWeight: fontWeight.fontWeight400,
    },
    zdropdownContent: {
      color: colorSchema.grays.primaryText,
      paddingLeft: "5px",
      marginTop: "5px",
      display: "flex",
      alignItems: "center",
    },
    zdropdownlogoSelection: {
      width: "10px",
      height: "15px",
      marginLeft: "auto",
      marginRight: "8px",
    },
    zdropdownLine: {
      width: "auto",
      paddingLeft: "6.5px",
    },
    ZiconBtn: {
      ...shorthands.border("none"),
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  });
  
  export default useStyles;
  