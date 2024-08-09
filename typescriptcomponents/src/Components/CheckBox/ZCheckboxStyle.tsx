import { makeStyles, makeStaticStyles } from "@fluentui/react-components";
// import { fontFamily } from "../../assets/desginPattern/font/FontSize/fontSize";
// import { constants } from "../../assets/desginPattern/constant/constant";

export const useStyles = makeStyles({
  // checkbox: {
  //   fontFamily: fontFamily.fontFamilyLato,
  // },
  label: {
    marginLeft: "10px",
    fontSize: "14px",
    fontFamily: "sans-serif",
  },
  checkboxContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "20px",
    fontFamily: "sans-serif",
  },
  invisible: {
    // display: constants.display.none,
  },
  disabled: {
    // opacity: constants.opacity.pointFive,
    // WebkitUserSelect: constants.webkitUserSelect.none,
    // pointerEvents: constants.pointerEvents.none,
    },
    invalidCheckbox: {
        
    }
});
export const useStaticStyles = makeStaticStyles({
  ".f64fuq3": {
    width: "30px",
    height: "30px",
    borderRadius: "8px",
  },
  ".rl7ci6d": {
    color: "white",
  },
});
