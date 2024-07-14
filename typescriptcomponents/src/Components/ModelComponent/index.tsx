import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  Image,
  Divider,
} from "@fluentui/react-components";
import { useStyles , useStaticStyle } from "./style";

import ModelCrossIcon from "./Modelimg/ModelCross.svg";
import { InputComponent } from "../Input";
import { Appearance } from "../Button";

export const DefaultModel = () => {
    const classes = useStyles();
    useStaticStyle();
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
              <Button appearance="outline" style={{ marginLeft:"90vw",marginTop:"20vh"}}>Add Organisation</Button>
      </DialogTrigger>
          <DialogSurface className={classes.ModelSurface}>
        <DialogBody>
                  <DialogTitle>
                      <div style={{display:"flex",flexDirection:"column",gap:"22px"}}>
                      <div className={classes.ModelHeading}>
                          <span style={{fontSize:"16px",fontWeight:700,fontFamily:"Lato"}}>Add Organisation</span>
                              <Image src={ModelCrossIcon} style={{height:'20px',width:"20px"}} />
                      </div>   
                          <Divider style={{color:"#D1D1D1"}}/>
                      </div>
          </DialogTitle>
                  <DialogContent style={{display:"flex",flexDirection:"column", gap:"20px"}} >
                      <div style={{ display: "flex", gap:"14px" , overflowX:"hidden" , width:"100%"}}>    
                          <InputComponent  style={{width:"443px"}}  />
                      <InputComponent style={{width:"443px"}}  />
                      </div>
                      <div>
                          <InputComponent/>
                      </div>
                      <div style={{ display: "flex", gap:"14px" , overflowX:"hidden" , width:"100%"}}>    
                          <InputComponent style={{width:"443px"}}  />
                      <InputComponent style={{width:"443px"}}  />
                      </div>
                      <div style={{ display: "flex", gap:"14px" , overflowX:"hidden" , width:"100%"}}>    
                          <InputComponent style={{width:"443px"}}  />
                      <InputComponent style={{width:"443px"}}  />
                      </div>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
                          <Appearance style={{width:"150px",height:"40px" , marginTop:"20px"}} />
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};