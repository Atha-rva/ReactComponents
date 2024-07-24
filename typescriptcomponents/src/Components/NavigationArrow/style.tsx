import { makeStyles } from "@fluentui/react-components";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    cursor: "pointer",
        justifyContent: "center",
        border: "1px solid #F5F5F5",
        opacity:2,
        borderRadius: "10px",
        width:"50px"
  },
  icon: {
    fontSize: "20px",
  },
});