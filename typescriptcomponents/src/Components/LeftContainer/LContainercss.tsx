import {  makeStyles } from "zitics-core-ui";
const useStyles = makeStyles({
  cardContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "2.5rem",
    position: "relative",
    fontFamily: "Lato",
    background: "linear-gradient(-45deg, #4d6aff, #00ffaa, #cf49ff, #00f0ff)",
    backgroundSize: "400% 400%",
    animationName: {
      "0%": { backgroundPosition: "0% 0%" },
      "50%": { backgroundPosition: "100% 100%" },
      "100%": { backgroundPosition: "0% 0%" },
    },
    animationDuration: "500s",
    animationTimingFunction: "ease",
    animationIterationCount: "infinite",
  },
  Textoutercontainer: {
    height: "210px",
    width: "645px",
  },

  textContainer: {
    position: "absolute",
    zIndex: 3,
    left: "3.75rem",
    bottom: "28.125rem",
    right: "3.75rem",
    color: "white",
    fontSize: "68px",
    fontStyle: "normal",
    fontFamily: "Lato",
    fontWeight: 700,
    lineHeight: "69px",
    textTransform: "uppercase",

    "@media (max-width: 480px)": {
      left: "2.75rem",
      fontSize: "36px",
      fontWeight:700,
      lineHeight:"44px",
      top: "40px",
    },
    "@media (max-width: 640px)": {
      left: "32px",
      fontSize: "20px",
      fontWeight: 800,
      lineHeight:"44px",
      top: "23px",
    },
    "@media (min-width: 641px) and (max-width: 1024px)": {
      left: "3.75rem",
      right: "3.75rem",
      fontSize: "52px",
      fontWeight:700,
      lineHeight: "52.8px",
      top: "45px",
    },
    "@media (min-width: 1025px) and (max-width: 1280px)": {
      left: "3.75rem",
      right: "3.75rem",
      fontSize: "76px",
      fontWeight:700,
      lineHeight:"69px",
      top: "65px",
    },
    "@media (min-width: 1281px)": {
      left: "3.75rem",
      right: "3.75rem",
      fontSize: "68px",
      fontWeight: 700,
      lineHeight: "69px",
      top: "90px",
    },
  },

  transparantImage: {
    opacity: 0.3,
  },

  frontImage: {
    zIndex: 2,
    width: "fit-content",
    height: "fit-content",
    opacity: 0.3,
  },
  Textsmallcontainer: {
    height: "21px",
    width: "96px",
    marginLeft: "60px",
    "@media (min-width: 481px) and (max-width: 640px)": {
      marginTop: "6px",
    },
  },
  textContainer1: {
    position: "absolute",
    zIndex: 3,
    left: "0.3rem",
    fontStyle: "normal",
    fontFamily: "Lato",
    color: "white",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "normal",
    textTransform: "lowercase",
  },
});

export default useStyles;
