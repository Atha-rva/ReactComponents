import { makeStyles } from "@fluentui/react-components";


export const useStyles = makeStyles({
    SuccessToast: {
        width: "350px",
        height: "60px",
        borderRadius: "10px",
        backgroundColor: "#107C10",
        ">div>svg": {
            display:"none",
        },
    },
    ToastImg: {
        height:"40px",
    },
    ErrorToast: {
        width: "350px",
        height: "60px",
        borderRadius: "10px",
        backgroundColor: "#A4262C",
        ">div>svg": {
            display:"none",
        }
    },
    WarningToast: {
        width: "350px",
        height: "60px",
        borderRadius: "10px",
        backgroundColor: "#FF9900",
        ">div>svg": {
            display:"none",
        }
    }
});