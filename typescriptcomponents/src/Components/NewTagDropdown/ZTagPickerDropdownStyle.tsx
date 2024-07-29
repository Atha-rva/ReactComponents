import { makeStyles, shorthands } from "@fluentui/react-components";
import {
  fontWeight,
  fontSize,
  lineHeight,
} from "../../assets/desginPattern/font/FontSize/fontSize";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";

export const useStyles = makeStyles({
  label: {
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
    fontFamily: "serif",
    lineHeight: lineHeight.lineHeight19,
  },
  listbox: {
    maxHeight: "135px !important",
    border: `1px solid ${colorSchema.colorSuccess}`,
  },
  listboxContainer: {
    border: `1px solid ${colorSchema.colorSuccess}`,
    borderRadius: "10px",
  },
  Tagdropdown: {
    border: `1px solid ${colorSchema.grays.primaryText}`,
    width: "100%",
    height: "2.5rem",
    cursor: "pointer",
    fontWeight: fontWeight.fontWeight400,
    fontSize: fontSize.Body_12_R,
    fontFamily: "serif",
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
  },
  unchecked: {
    backgroundColor: "white",
  },
  border: {
    overflowY: "auto",
    overflowX: "hidden",
    fontFamily: "serif",
    fontWeight: fontWeight.fontWeight600,
    fontSize: fontSize.Body_12_R,
    lineHeight: lineHeight.lineHeight16,
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
    "&:hover": {
      backgroundColor: "#616161",
      color:"#FFFF"
    },
    "&.selected": {
      backgroundColor: "#616161",
    },
  },
  selectedOption: {
    display: "flex",
    gap: "8px",
    flexWrap: "nowrap",
    width: "100%",
    overflowX: "auto",
    "::-webkit-scrollbar": {
      width: "3px",
      height: "2px",
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
  optionLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    backgroundColor: "#616161",
    paddingLeft: "8px",
    paddingTop: "4px",
    paddingBottom: "4px",
    paddingRight: "6px",
    borderRadius: "10px",
    color: "white",
  },
  crossButton: {
    cursor: "pointer",
    backgroundColor: "white",
    borderRadius: "50%",
    color: "#616161",
    width: "12px",
    height: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10.5px",
    fontWeight: "600",
  },
  selectedOptionsContainer: {
    display: "flex",
    overflowX: "auto",
    whiteSpace: "nowrap",
    gap: "10px",
    
  },
  clearAllButton: {
    marginLeft: 'auto',
    cursor: 'pointer',
  },
  ZTagInput: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  }
  
  
});


// style={{

// }}



