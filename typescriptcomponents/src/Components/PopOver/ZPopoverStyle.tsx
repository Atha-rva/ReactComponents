import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  buttonIcon: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  popoverSurface: {
    borderRadius: "10px",
  },
  link: {
    color: "#616161",
    borderRadius: "10px",
    height: "50px",
    marginLeft: "15px",
    textDecoration: "underline",
  },
  hr: {
    width: "90%",
    border: 0,
    height: 0,
    borderTop: "1px solid #D1D1D1",
    marginTop: "0.2px",
    marginBottom: "0.2px",
  },
  hr1: {
    width: "100%",
    border: 0,
    height: 0,
    borderTop: "1px solid #D1D1D1",
    marginTop: "0.2px",
    marginBottom: "0.2px",
  },
  mainDiv: {
    width: "180px",
    borderRadius: "10px",
    marginLeft: "-17px",
    marginRight: "-17px",
    marginBottom: "-17px",
  },
  mainDiv1: {
    borderRadius: "10px",
    marginLeft: "-17px",
    marginRight: "-17px",
    marginBottom: "-17px",
  },
  searchbox: {
    marginTop: "-17px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    border: "none",
    width: "100%",
  },
  button: {
    borderRadius: "10px",
    width: "10px",
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    scrollbarWidth: "thin",
    maxHeight: "198px",
    overflowY: "auto",
    overflowX: "hidden",
    position: "relative",
  },

  scrollContent: {
    marginRight: "0px",
  },
  option: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    paddingLeft: "15px",
    // maxwidth: "242px",
    width: "242px",
    height: "48px",
    ":hover": {
      backgroundColor: "#616161",
      color: "white",
    },
  },
  subDiv: {
    width: "95%",
    wordBreak: "break-all",
  },
});
