import { makeStaticStyles, makeStyles } from "zitics-core-ui";

export const useStaticStyles = makeStaticStyles({
    ".r109xulx::before": {
        border:"none"
    },
    ".r109xulx::after": {
        border:"none !important"
    },

});

export const useStyles = makeStyles({
    root: {
        padding: '4px',
        borderRadius: '10px',
        border: "1px solid #616161",
        ">button": {
            padding: "0",
            cursor: "pointer",
        }
      },
    base: {
        display: "flex",
        flexDirection: "column",
        
        "> label": {
          marginBottom: "10px",
        },
        
      },
});