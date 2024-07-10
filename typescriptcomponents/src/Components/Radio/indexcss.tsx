import { makeStyles , shorthands} from "zitics-core-ui";


export const useStyles = makeStyles({
    ZRadioroot: {
        ...shorthands.borderColor("black"),
        ">div": {
            color: "black",
            width: "30px",
            height: "30px",
            ...shorthands.borderColor("black"),
        },
        ">div:after": {
            content: "",
            color: "black",
            ...shorthands.border("10px", "solid", "black"),
        },
    },
});