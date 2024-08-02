import { makeStyles } from "@fluentui/react-components";
import { colorSchema } from "zitics-core-ui";


export const useStyles = makeStyles({
    praposalDataSectionTextarea: {
        width: "auto",
        height: "auto",
        borderRadius: "0.625rem",
        border: `1.2px solid ${colorSchema.gradient.teaserModeLeft}`,
        marginTop: "1rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        wordBreak:"break-all",
    
        "@media screen and (min-width: 1024px) and (max-width: 1366px)": {
          width: "96.5%",
        },
      },
      praposalDataSectionPara: {
          // overflowWrap:"break-word",
          wordBreak:"break-all",
        "@media screen and (min-width: 1024px) and (max-width: 1366px)": {
              width: "52.75rem",
            
        },
      },
});