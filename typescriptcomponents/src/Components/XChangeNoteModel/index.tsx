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

export const XChangeNoteModel = () => {
  useStaticStyle();
  return (
    <Dialog>
      <DialogTrigger disableButtonEnhancement>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogSurface
        style={{ width: "360px", height: "220px", borderRadius: "16px" }}
      >
        <DialogBody
          style={{
            width: "auto",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
              Proposal added in XChange section
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              Do you want to start adding the
            </span>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              data to complete the proposal?
            </span>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Appearance
                style={{
                  width: "100px",
                  height: "40px",
                  borderRadius: "10px",
                  marginTop: "34px",
                }}
              />
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
