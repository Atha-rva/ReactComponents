import { makeStyles } from "@fluentui/react-components";

export const useStyle = makeStyles({
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
    backgroundColor: "blue",
    width: "0px",
  },
  scrollContainer: {
    "::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Change color here for more visibility
      borderRadius: "10px",
      border: "2px solid transparent",
      backgroundClip: "content-box",
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
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
    width: "252px",
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
