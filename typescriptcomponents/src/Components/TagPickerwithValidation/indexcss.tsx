import { makeStyles } from "zitics-core-ui";

export const useStyles = makeStyles({
  ZTagPicker: {
    borderRadius: "10px",
    border: "1px solid black !important",
    ":active": {
      border: "1px solid black !important",
    },
    ":after": {
      content: "",
      border: "none !important",
    },
  },
  // ZTagPickerTyping: {
  //   border: "1px solid #33CC99 !important",
  //   ":after": {
  //     content: "",
  //     border: "none !important",
  //   },
  // },
  ZTagPickerError: {
    borderRadius: "7px",
    border: "1px solid red !important", 
    ":active": {
      border: "1px solid red !important",
    },
    ":after": {
      content: "",
      border: "none !important",
    },
  },
  ZTagContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  ZTagInsideSelect: {
    borderRadius: "10px",
    backgroundColor: "#616161",
    color: "white",
    height: "24px",
    fontSize: "12px !important",
    width: "auto",
    wordBreak: "break-word",
    fontFamily: "Lato",
    ">span>svg": {
      color: "black",
      backgroundColor: "white",
      borderRadius: "50%",
      fontSize: "10px !important",
      fontWeight: "700",
    },
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
    display: "none",
  },
  ZWrongGstinMsg: {
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: 400,
    lineHeight: "20px",
    fontSize: "10px",
    fontFamily: "Lato",
    fontStyle: "normal",
    color: "red",
  },
});
