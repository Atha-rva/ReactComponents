import {
    makeStaticStyles,
    makeStyles,
    shorthands,
  } from "@fluentui/react-components";
  import {

    fontSize,
    fontWeight,
  } from "../../assets/desginPattern/font/FontSize/fontSize";
  import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
  
  export const useStaticStyles = makeStaticStyles({
    "span.fui-TableHeaderCell__sortIcon.___107q2u0_vdwe6p0.f22iagw.f122n59.fclwglc":
      {
        display: "none",
      },
  });
  export const useStyles = makeStyles({
    TableHeader: {
      // backgroundColor: "#EBEBEB",
      backgroundColor: colorSchema.grays.defaultBackgroundInput,
      fontFamily:"sans-serif",
    },
    TableHeaderCell: {
      width: "5%",
      fontFamily:"sans-serif",
    },
    TableCellLayout: {
      // fontSize: "0.75rem",
      // fontWeight: 400,
      fontSize: fontSize.Body_12_R,
      fontWeight: fontWeight.fontWeight400,
      marginLeft: "0.8rem",
      fontFamily:"sans-serif",
    },
    EmptyTableCell: {
      height: "8rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.938rem",
    },
    TableHeaderCells: {
      width: "4.49rem",
    },
    TableBody: {
      // backgroundColor: "#F5F5F5",
      backgroundColor: colorSchema.grays.defaultBackgroundOutline,
      fontFamily:"sans-serif",
    },
    editButton: {
      // backgroundColor: "#F5F5F5",
      // ...shorthands.borderColor("#F5F5F5"),
      backgroundColor: colorSchema.grays.defaultBackgroundOutline,
      fontFamily:"sans-serif",
      ...shorthands.borderColor(`${colorSchema.grays.defaultBackgroundOutline}`),
  
      marginLeft: "5rem",
    },
    deleteButton: {
      // backgroundColor: "#F5F5F5",
      // ...shorthands.borderColor("#F5F5F5"),
      backgroundColor: colorSchema.grays.defaultBackgroundOutline,
      fontFamily:"sans-serif",
      ...shorthands.borderColor(`${colorSchema.grays.defaultBackgroundOutline}`),
    },
  });
  