import { colorSchema, makeStyles , shorthands } from "zitics-core-ui";

export const useStyles = makeStyles({
    body: {
        ...shorthands.margin("0"),
        ...shorthands.padding("0"),
        boxSizing: "border-box",
        position:"relative",
    },
    wrap: {
        overflow: "hidden",
        position: "absolute",
        height: "100vh",
        width: "100%",
        background: `linear-gradient(-45deg, ${colorSchema.gradient.fullPraposalLeft}, ${colorSchema.gradient.fullPraposalRight},  ${colorSchema.gradient.fullPraposalLeft}, ${colorSchema.gradient.fullPraposalRight})`,
        backgroundSize: "400% 400%",
        animationName: {
            "0%": { backgroundPosition: "0% 0%" },
            "50%": { backgroundPosition: "100% 100%" },
            "100%": {backgroundPosition:"0% 0%"},
        },
        animationDuration: "500s",
        animationTimingFuncation: "ease",
        animationIterationCount: "infinite",
    },
    canvas: {
        position: "absolute",
        display: "block",
        width: "100vw",
        height:"100vh",
    }
});