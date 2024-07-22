import { makeStyles, shorthands } from "@fluentui/react-components";
// import {
//   fontWeight,
//   fontSize,
//   lineHeight,
//   fontFamily,
// } from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
 
export const useStyles = makeStyles({
  label: {
    fontWeight: 400,
    fontSize:"12px",
    fontFamily:"sans-serif",
    lineHeight: "19px",
  },
  listbox: {
    maxHeight: "135px !important",
    border: `1px solid ${colorSchema.colorSuccess}`,
  },
  listboxContainer: {
    border: `1px solid ${colorSchema.colorSuccess}`,
    borderRadius: "10px",
  },
  dropdown: {
    border: `1px solid ${colorSchema.grays.primaryText}`,
    width: "100%",
    height: "2.5rem",
    cursor: "pointer",
    fontWeight: 400,
    fontSize:"12px",
    fontFamily: "sans-serif",
    borderRadius: "0.625rem",
    ":after": {
      display: "none",
    },
 
    ":active": {
      ...shorthands.borderColor("black"),
    },
 
    "&:hover, &:active, &:focus-within": {
      borderTopColor: colorSchema.types.primary1,
      borderBottomColor: colorSchema.types.primary1,
      borderLeftColor: colorSchema.types.primary1,
      borderRightColor: colorSchema.types.primary1,
    },
  },
  checked: {
    backgroundColor: "black",
    ...shorthands.borderColor("black"),
  },
  unchecked: {
    backgroundColor: "white",
  },
  border: {
    overflowY: "auto",
    overflowX: "hidden",
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    ...shorthands.border("1px", "solid", "white"),
    marginRight: "-0.210rem",
 
    "::-webkit-scrollbar": {
      width: "3px",
      height: "4px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "lightGray",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#a09f9f",
    },
  },
  sidemargin: {
    marginLeft: "0.555rem",
    backgroundColor: colorSchema.colorBackgroundPrimaryInput,
    width: "96.5%",
  },
  option: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    borderRadius: "4px",
  },
});