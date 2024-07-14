import * as React from "react";
import {
  useId,
  Link,
  Button,
  Toaster,
  useToastController,
  Toast,
  ToastTitle,
  ToastBody,
  ToastFooter,
  makeStaticStyles,
  Image,
  Title1,
} from "@fluentui/react-components";
import { useStyles } from "./style";
import ImgSuccess from "./ToastImg/SuccesLogo.svg";
import ImgError from "./ToastImg/ErrorLogo.svg"; 
import ImgWarning from "./ToastImg/WarningLogo.svg";



const useStaticStyles = makeStaticStyles({
  // ".rhf7k35": {
  //     background
  //   }
});

export const ToastApplication = () => {
  const classes = useStyles();
  useStaticStyles();
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const notifySuccess = () =>
    dispatchToast(
      <Toast className={classes.SuccessToast}>
        <ToastTitle style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "12px" }}>
          <Image src={ImgSuccess} className={classes.ToastImg} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 400, fontSize: "16px",fontFamily:"Lato" }}>Success</span>
            <span style={{ fontWeight: 400, fontSize: "12px",fontFamily:"Lato" }}>This is a sample success message</span>
          </div>
        </ToastTitle>
      </Toast>,
      { intent: "success" }
    );

  const notifyError = () => 
    dispatchToast(
      <Toast className={classes.ErrorToast}>
        <ToastTitle style={{color:"white",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"12px"}}>
          <Image src={ImgError} className={classes.ToastImg} />
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:400,fontSize:"16px" , fontFamily:"Lato"}}>Error</span>
            <span style={{fontWeight:400,fontSize:"12px",fontFamily:"Lato"}}>This is sample error message</span>
          </div>
        </ToastTitle>
      </Toast>
    );
  
  const notifyWarning = () =>
    dispatchToast(
      <Toast className={classes.WarningToast}>
        <ToastTitle style={{color:"white",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"12px"}}>
          <Image src={ImgWarning} className={classes.ToastImg} />
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{fontWeight:400,fontSize:"16px",fontFamily:"Lato"}}>Warning</span>
            <span style={{fontWeight:400,fontSize:"14px",fontFamily:"Lato"}}>This is sample warning message</span>
          </div>
        </ToastTitle>
      </Toast>
    );

  return (
    <>
      <Toaster toasterId={toasterId} position="top" />
      <Button onClick={notifySuccess}>Show Success Toast</Button>
      <Button onClick={notifyError}>Show Error Toast</Button>
      <Button onClick={notifyWarning}>Show Warning Toast</Button>
    </>
  );
};
