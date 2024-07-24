// style.js
import { makeStaticStyles, makeStyles } from "zitics-core-ui";

export const useStaticStyles = makeStaticStyles({
  ".r1oeeo9n::after": {
    border: "gray",
  },
});

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRadius: "10px",
    "> div": { display: "flex", flexDirection: "column", gap: "2px" },
  },
  Input: {
    border: "1px solid black !important",
    borderRadius: "10px",
    height: "40px",
    width: "205px",
    "&::placeholder": {
      color: "gray",
      fontStyle: "italic",
    },
  },
});
