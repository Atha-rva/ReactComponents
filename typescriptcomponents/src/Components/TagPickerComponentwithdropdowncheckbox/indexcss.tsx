import { makeStyles,shorthands} from "zitics-core-ui";

export const useStyles = makeStyles({

  ZTagPicker: {
    borderRadius: "7px",
        border: "1px solid black !important",
    ':active': {
        border: "1px solid black !important",
    },
    ':after': {
      content: "",
      border: "1px solid black !important",
    }
  },
  ZExpandIcon: {
    display: "flex",
  justifyContent: "center",
    transform: "translateY(10%)",
    width: "15px",
    height:"25px",
    alignItems:"center",
  },
  ZTagInsideSelect: {
    borderRadius: "10px",
    backgroundColor: "#616161",
      color: "white",
    height: "24px",
      fontSize:"12px !important",
    width: "auto",
    wordBreak: "break-word",
      fontFamily: "Lato",
      ">span>svg": {
        color: "black",
        backgroundColor: "white",
        borderRadius: "50%",
        fontSize: "10px !important",
        fontWeight:"700",
      }
  },
  ZTagPickerListContent: {
    ...shorthands.border("2px", "solid", "lightgreen"), 
    marginTop: "6px",
    borderRadius: "10px",
    maxHeight:"144px",
  },
  tagPickerOption: {
    '&:hover': {
      color:"white",
      backgroundColor: "#616161",
    }
  },
});
