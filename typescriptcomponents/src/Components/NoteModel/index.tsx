import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
  makeStaticStyles,
} from "@fluentui/react-components";
import { Appearance } from "../Button";

const useStaticStyle = makeStaticStyles({
  ".rsptlh5": {
    inset: "0px",
    backgroundColor: "#242424",
    position: "fixed",
  },
});

export const NoteModel = () => {
  useStaticStyle();
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface
        style={{ width: "520px", height: "260px", borderRadius: "16px" }}
      >
        <DialogBody
          style={{
            width: "440px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "15px",
          }}
        >
          <DialogContent
            style={{ fontWeight: 600, fontSize: "18px", fontFamily: "Lato" }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                fontSize: "18px",
              }}
            >
              {" "}
              This organisation is already registered in our database.
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              {" "}
              You need to ask permission from admin to access this
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              organisation.
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                fontSize: "18px",
              }}
            >
              Do you want to send a request for access?
            </span>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Appearance
                style={{
                  width: "100px",
                  height: "40px",
                  borderRadius: "10px",
                  marginTop: "30px",
                }}
              />
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
