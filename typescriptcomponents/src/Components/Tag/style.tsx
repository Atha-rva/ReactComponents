import { makeStaticStyles, makeStyles } from "@fluentui/react-components";

export const useStaticStyles = makeStaticStyles({
    ".fez10in": {
        backgroundColor: "#FFFFFF",
        color: "#616161",
        borderRadius: "10px",
        fontSize: "10px",
        fontFamily:"Lato",
    },
    ".f1sr2531:hover": {
        backgroundColor: "#242424",
        color: "#FFFFFF",
        
        
    }
});

export const useStyles = makeStyles({
  container: {
    columnGap: "10px",
    display: "flex",
    marginLeft: "200px",
        marginTop: "200px",
  },
  TagInput: {
    backgroundColor: "#616161",
    color: "white",
    width: "auto",
    height: "24px",
      borderRadius: "8px",
      fontWeight: 400,
      fontSize:"12px",
  },
});
