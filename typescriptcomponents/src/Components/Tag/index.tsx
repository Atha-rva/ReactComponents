import * as React from "react";
import { Tag, makeStyles , mergeClasses } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import { useStyles , useStaticStyles } from "./style";

interface TagComponentProps{
    taglabel: string;
    className?: string;
    style:React.CSSProperties
}


export const TagComponent: React.FC<Partial<TagComponentProps>> = ({taglabel,className,style}) => {
    const classes = useStyles();
    useStaticStyles();
  return (
      <div className={mergeClasses(classes.container,className)} style={style}>
          <Tag
              className={classes.TagInput}
        dismissible
      >
              {taglabel}
      </Tag>
    </div>
  );
};
