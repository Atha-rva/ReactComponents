import { makeStyles, shorthands } from "zitics-core-ui";

export const useStyles = makeStyles({
  ZTagPicker: {
    borderRadius: "8px",
        border: "1px solid black !important",
    ':active': {
        border: "1px solid black !important",
    }
  },
  ZTagInsideSelect: {
    borderRadius: "10px",
    backgroundColor: "#616161",
      color: "white",
      height: "auto",
    width: "auto",
    wordBreak:"break-word"
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
});
