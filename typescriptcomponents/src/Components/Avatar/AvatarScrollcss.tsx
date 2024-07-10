import { makeStyles} from "@fluentui/react-components";

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
    width: "85%",
    border: 0,
    height: 0,
    borderTop: "1px solid #D1D1D1",
    marginTop: "0.1px",
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
    width: "100%",
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
    maxHeight: "200px",
    width: "100%",
    overflowY: "hidden", 
    overflowX: "hidden",
    position: "relative",
    backgroundColor: "transparent",
    
    ":hover": {
      overflowY: "auto", 
      backgroundColor:"transparent",
    },
    "::-webkit-scrollbar": {
      width: "8px",
      backgroundColor: "transparent",
      
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#C7C7C7",
      borderRadius: "10px",
      border: "2px solid transparent",
      backgroundClip: "content-box",
    },
    "::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  },
  scrollContent: {
    marginRight: "0px",
    width: "100% !important",
    overflow:"visible",
  },
  option: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    paddingLeft: "15px",
    width: "252px",
    height: "48px",
    ":hover": {
      backgroundColor: "#616161",
      color: "white",
    },
  },
  subDiv: {
    width: "100%",
    wordBreak: "break-all",
  },
});
