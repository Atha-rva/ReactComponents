import { makeStyles, shorthands } from "@fluentui/react-components";
import {
//   fontFamily,
  fontSize,
  fontWeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
const useStyles = makeStyles({
  root: {
    fontSize: fontSize.Body_12_R,
    fontWeight: fontWeight.fontWeight400,
    fontFamily: "sans-serif",
  },
  input: {
    height: "2.5rem",
    ...shorthands.borderRadius("10px"),
    // backgroundColor: colorSchema.grays.defaultBackgroundInput,
    backgroundColor: colorSchema.grays.defaultBackground,

    fontSize: fontSize.Body_12_R,
    paddingLeft: "0.875rem",
    fontFamily: "sans-serif",
    ...shorthands.border("none"),
    "&:-internal-autofill-selected": {
      appearance: "menulist-button",
      backgroundImage: "none !important",
      backgroundColor: `${colorSchema.grays.defaultBackgroundInput} !important`,
      color: "fieldtext !important",
    },
  },

  errorImage: {
    paddingLeft: "0.625rem",
  },
  afterBottomBorderNone: {
    ":after": {
      ...shorthands.borderBottom("none"),
    },
  },
  afterBottomBorderGreen: {
    ":after": {
      ...shorthands.borderBottom(
        "2px",
        "solid",
        `${colorSchema.errorsAndStatus.success}`
      ),
      ...shorthands.borderRadius("10px"),
      ...shorthands.borderWidth("50px"),
      translate: "0rem -0.063rem",
    },
  },
  afterBottomBorderRed: {
    ":after": {
      ...shorthands.borderBottom(
        "2px",
        "solid",
        `${colorSchema.errorsAndStatus.error}`
      ),
      ...shorthands.borderRadius("10px"),
      ...shorthands.borderWidth("50px"),
      translate: "0rem -0.063rem",
    },
  },
  errorMessage: {
    display: "flex",
    position: "relative",
    justifyContent: "flex-end",
    color: colorSchema.errorsAndStatus.error,
    fontFamily: "sans-serif",
    fontSize: fontSize.Body_10_R,
    marginTop: "0.375rem",
  },
  successMessage: {
    color: colorSchema.errorsAndStatus.success,
    fontFamily: "sans-serif",
    fontSize: fontSize.Body_10_R,
  },
  //  OTP Input Style

  otpInputs: {
    display: "flex",
    flexDirection: "column",
  },
  otp: {
    display: "flex",
    gap: "10px",
  },
  inputboxContainer: {
    width: "67px",
    height: "40px",
    borderRadius: "10px",
    paddingLeft: "1rem",
    border: "1px solid",
    ":focus-within": {
      ...shorthands.borderColor(`${colorSchema.types.primary2} !important`),
    },
    ":after": { border: "none" },
  },
  errorMsg: {
    display: "flex",
    justifyContent: "flex-end",
  },
  disabledInput: {
    backgroundColor: colorSchema.grays.defaultBackgroundInput,
    color: "black",
    fontFamily: "sans-serif",
    fontWeight: fontWeight.fontWeight700,
    fontSize: fontSize.Header_14_SB,
    ...shorthands.border("none"),
    border: "none",
    cursor: "not-allowed",
  },
});

export { useStyles };
