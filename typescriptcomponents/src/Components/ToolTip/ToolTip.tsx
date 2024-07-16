import * as React from "react";

import { makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import type { TooltipProps } from "@fluentui/react-components";


interface ZTooltipProps extends TooltipProps {
  disabled?: boolean
}


const useStyles = makeStyles({
  tooltip: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
  },
});

export const ZToolTip = ({disabled = false,...props}: Partial<ZTooltipProps>) => {
  const styles = useStyles();

  if (disabled) {
    return null;
  }
    return (
        <div   style={{
          display: "grid",
          gridTemplateAreas:
            '".             above-start   above         above-end     .            "' +
            '"before-top    .             .             .             after-top    "' +
            '"before        .             .             .             after        "' +
            '"before-bottom .             .             .             after-bottom "' +
            '".             below-start   below         below-end     .            "',
        }}>
            
    <Tooltip
          withArrow
          content={{ children: "Example tooltip", className: styles.tooltip }}
          relationship="label"
        positioning={"above"}
          {...props}
    >
      {props.children}
    </Tooltip>
      </div>
  );
};
