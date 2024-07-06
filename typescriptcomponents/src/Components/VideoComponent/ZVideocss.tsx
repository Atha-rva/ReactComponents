import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  ZVideoContainer: {
    width: "100%",
    height: "207px",
    borderRadius: "10px",
    background: "linear-gradient(115deg, #969696 9.36%, #3E3E3E 95.32%)",
    position: "relative",
  },
  ZVideoContainer_wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    cursor: "pointer",
  },
  ZVideoContainer_videocontainer: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  ZVideoFullScreenButton: {
    position: "absolute",
    bottom: "2px",
    right: "10px",
    cursor: "pointer",
    padding: "0px 8px",
  },
  fullscreenbtn: {
    width: "25px",
    height: "50px",
    display: "flex",
  },
  ZBottomRightContainer: {
    display: "flex",
    gap: "20px",
  },
  ZVideoContainer_video: {
    width: "100%",
    height: "100%",
    top: "0%",
    left: "0%",
    objectFit: "cover",
  },
});
