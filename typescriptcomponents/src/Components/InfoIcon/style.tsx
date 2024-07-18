import { makeStyles, shorthands } from "@fluentui/react-components";
// import { fonts } from "../fonts/fonts";

export const useStyles = makeStyles({
  body: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("0.3rem"),
  },
  Title: {
    color: "#000",
    fontSize: "0.5rem",
  },
  innerTitle: {
    marginRight: "0.5rem",
  },

  specialChar: {
    display: "flex",
  },
  specialImg: {
    marginRight: "0.69rem",
    top: "80%",
    marginTop: "-13px",
  },
  horizontal: {
    transform: "translate(-10%)",
  },
  vertical: {},
});
