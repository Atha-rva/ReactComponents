import * as React from "react";
import {
  makeStyles,
  Button,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Image,
  Divider,
  makeStaticStyles,
} from "@fluentui/react-components";
import type { PopoverProps } from "@fluentui/react-components";

import StatusImg from "./images/status.svg";
import StatusArrow from "./images/statusArrowTable.svg";

import TickMarkImg from "./images/CorrectTick.svg";
import "../../assets/CSS/Lato.css";

const WrongImg =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/rejected.svg";
const ActiveImg =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/active.svg";

const PendingImg =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/Pending.svg";

const useStaticStyles = makeStaticStyles({
  ".f4zyqsv": {
    padding: "5px",
  },
});

const useStyles = makeStyles({
  PopImage: {
    width: "15px",
    height: "15px",
  },
  TickMark: {
    width: "10px",
    height: "10px",
  },
  StatusArrow: {
    transition: "transform 0.3s ease",
  },
  statusContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px 0px",
    gap: "6px",
    cursor: "pointer",
  },
  tickMarksContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
});

const statuses = [
  { label: "Active", icon: ActiveImg },
  { label: "Pending", icon: PendingImg },
  { label: "Rejected", icon: WrongImg },
];

export const OrgStatus = (props: PopoverProps) => {
  const styles = useStyles();
  useStaticStyles();
  const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>([]);
  const [isArrowRotated, setIsArrowRotated] = React.useState(false);

  const handleStatusClick = (label: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(label)
        ? prev.filter((status) => status !== label)
        : [...prev, label]
    );
  };

  return (
    <div>
      <Popover
        {...props}
        onOpenChange={(e, data) => setIsArrowRotated(data.open)}
      >
        <PopoverTrigger disableButtonEnhancement>
          <Button
            style={{ gap: "6px", border: "none", background: "none" }}
            onClick={() => setIsArrowRotated((prev) => !prev)}
          >
            <Image src={StatusImg} />
            <Image
              src={StatusArrow}
              className={styles.StatusArrow}
              style={{
                transform: isArrowRotated ? "rotate(-180deg)" : "rotate(0deg)",
              }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverSurface
          tabIndex={-1}
          style={{
            borderRadius: "10px",
            border: "2px solid #33CC99",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "92px",
          }}
        >
          {statuses.map((status, index) => (
            <div key={index}>
              <div
                onClick={() => handleStatusClick(status.label)}
                className={styles.statusContainer}
              >
                <Image src={status.icon} className={styles.PopImage} />
                <span style={{ fontWeight: 400, fontSize: "12px" }}>
                  {status.label}
                </span>
                <div className={styles.tickMarksContainer}>
                  {selectedStatuses.includes(status.label) && (
                    <Image src={TickMarkImg} className={styles.TickMark} />
                  )}
                </div>
              </div>
              {index < statuses.length - 1 && (
                <Divider style={{ paddingTop: "4px" }} />
              )}
            </div>
          ))}
        </PopoverSurface>
      </Popover>
    </div>
  );
};
