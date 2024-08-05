import {
    makeStaticStyles,
    makeStyles,
    shorthands,
  } from "@fluentui/react-components";
  import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
//   import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";
  
  const useStyles = makeStyles({
    accordion: {
      width: "100%",
      fontFamily: "Lato",
    },
    activeItem: {
      ...shorthands.borderRadius("0.625rem"),
    },
    openItem: {
      backgroundColor: colorSchema.grays.defaultBackground,
    },
    inactiveItem: {
      backgroundColor: colorSchema.grays.defaultBackgroundOutline,
      ...shorthands.border("1px", "solid", colorSchema.grays.disabledText),
      ...shorthands.borderRadius("0.625rem"),
    },
    header: {
      width: "100%",
      fontFamily: "sans-serif",
  
      "> button": {
        "> span": {
          paddingRight: "4%",
          paddingLeft: "2%",
        },
      },
    },
    panel: {
      paddingLeft: "3%",
      paddingBottom: "6%",
      marginTop: "-0.8rem",
    },
    headerUl: {
      listStyleType: "none",
      display: "flex",
      width: "100%",
      alignItems: "center",
      fontSize: "0.75rem",
      paddingLeft: "4%",
         fontFamily: "sans-serif",
      ...shorthands.gap("8%"),
    },
    statusAndHeading: {
      display: "flex",
  
      width: "65%",
      ...shorthands.gap("6%"),
    },
    avatarAndPercent: {
      display: "flex",
      justifyContent: "space-evenly",
      width: "40%",
      ...shorthands.gap("1%"),
      alignItems: "center",
    },
    statusPercent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    Steeper: {
      width: "16px",
      height: "16px",
      border: `1.2px solid ${colorSchema.grays.defaultBorder}`,
      borderRadius: "50%",
    },
    stepperActive: {
      width: "16px",
      height: "16px",
      border: `1.2px solid ${colorSchema.gradient.teaserModeRight}`,
      borderRadius: "50%",
    },
    disabledItem: {
      pointerEvents: "none",
      opacity: 0.5,
    },
    invisible: {
      display: "none",
    },
    disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
      WebkitUserSelect: "none",
    },
  });
  
  const useStaticStyles = makeStaticStyles({
    ul: {
      margin: "0px",
      padding: "0px",
      fontFamily: "sans-serif",
    },
  });
  
  export { useStyles, useStaticStyles };
  