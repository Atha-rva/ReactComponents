import { makeStyles , shorthands} from "zitics-core-ui";

export const useStyles = makeStyles({
  ZRadioRoot: {
    ">div": {
      width: "30px",
      height: "30px",
      borderRadius: "10px",
      ...shorthands.border("1px","solid","black"),
    },
    ">div>svg": {
      backgroundColor: "black",
      width: "30px",
      height: "30px",
      borderRadius: "10px",
      ...shorthands.border("5px","solid","black"),
    },
  },
});
