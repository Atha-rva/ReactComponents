import { makeStyles} from "zitics-core-ui";

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
  ZTagInsideSelect: {
    borderRadius: "10px",
    backgroundColor: "#616161",
      color: "white",
    height: "24px",
      fontSize:"12px !important",
    width: "auto",
    wordBreak: "break-word",
    fontFamily: "Lato",
  },
  
  ZTagSec: {
    display: "flex",
    gap: "10px",
  },
  ZCrossBtn: {
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  ZTagPickerList: {
    display:"none"
  },
  
});
