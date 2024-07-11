import { makeStyles, shorthands } from "zitics-core-ui";

export const useStyles = makeStyles({
  ZRadioroot: {
    ">div": {
      color: "black",
      width: "30px",
      height: "30px",
      ...shorthands.border("1px", "solid", "black"),
    },
    ">div:after": {
      content: "",
      color: "black",
      ...shorthands.border("10px", "solid", "black"),
    },
  },
});
