import { makeStyles, shorthands } from "@fluentui/react-components";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
// import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";

const useStyles = makeStyles({
  primary: {
    // width: "160px",
    width: "100%",

    height: "40px",
    fontFamily: "sans-serif",
    backgroundColor: colorSchema.buttonHoldBackgroundColor,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      background: "linear-gradient(#33CC99,#33C3CC);",
    },
  },

  secondary: {
    width: "160px",
    height: "30px",
    fontFamily: "sans-serif",
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },

  borderButton: {
    width: "160px",
    height: "40px",
    fontFamily: "sans-serif",
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },

  colorHold: {
    width: "160px",
    height: "40px",
    background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontFamily: "sans-serif",
    ...shorthands.border("none"),
    borderRadius: "10px",
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      background: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
    },
  },

  transparentButton: {
    width: "160px",
    height: "30px",
    backgroundColor: "transparent",
    color: "black",
    fontFamily: "sans-serif",
    fontWeight: 400,
    fontSize: "14px",

    "&:hover, &:active": {
      color: "black",
      backgroundColor: "transparent",
    },
  },
  linearColor: {
    width: "160px",
    height: "40px",
    fontFamily: "sans-serif",
    // backgroundColor: colorSchema.buttonHoldBackgroundColor,
    backgroundColor: `linear-gradient(${colorSchema.gradient.teaserModeLeft}, ${colorSchema.gradient.fullpraposalGridLight1})`,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
  },
  borderColor: {
    width: "180px",
    height: "30px",
    fontFamily: "sans-serif",
    // color: colorSchema.grays.primaryText,
    color: colorSchema.buttonHoldBackgroundColor,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    ...shorthands.border("1px", "solid", colorSchema.buttonHoldBackgroundColor),
    ":hover": {
      color: colorSchema.buttonHoldBackgroundColor,
      // backgroundColor: colorSchema.grays.primaryText,
      ...shorthands.border(
        "1px",
        "solid",
        colorSchema.buttonHoldBackgroundColor
      ),
    },
  },
  default: {
    width: "160px",
    height: "40px",
    fontFamily: "sans-serif",
    backgroundColor: colorSchema.grays.primaryText,
    color: colorSchema.grays.defaultBackground,
    fontSize: "14px",
    fontWeight: "400",
    borderRadius: "0.625rem",
    ...shorthands.border("none"),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },
  eyeButton: {
    width: "160px",
    height: "30px",
    fontFamily: "sans-serif",
    color: colorSchema.grays.primaryText,
    fontSize: "12px",
    fontWeight: "400",
    borderRadius: "8px",
    gap: ".8rem",
    ...shorthands.border("1px", "solid", colorSchema.grays.primaryText),
    ":hover": {
      color: colorSchema.grays.defaultBackground,
      backgroundColor: colorSchema.grays.primaryText,
    },
  },
});

export { useStyles };
