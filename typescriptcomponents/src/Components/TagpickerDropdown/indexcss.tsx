import { makeStyles,shorthands} from "zitics-core-ui";

export const useStyles = makeStyles({
//   selected: {
//     ...shorthands.border("1px","solid","lightgreen"),
//   },
  
//   ZTagSec: {
//     display: "flex",
//     gap: "10px",
//   },
//   ZCrossBtn: {
//     position: "absolute",
//     top: "45%",
//       right: "30px",
//     height:"16px",
//     transform: "translateY(-50%)",
//     cursor: "pointer",
//   },
// //   ZTagPickerList: {
// //     display:"visible"
// //   },
//   ZTagPickerFocused: {
//     ...shorthands.border("1px","solid","lightgreen"),
//   },
//   ZCheckbox: {
//     position: "absolute",
//     top: "40%",
//       right: "10px",
//     transform: "translateY(-40%)",
//   },

//   ZtagPickerOption: {
     
//     '&:hover': {
//       color:"white",
//       backgroundColor: "#616161",
//     }
//   },
//   tagPickerOptionSelected: {
//     color:"white",
//     backgroundColor: "#616161",
//     '&:hover': {
//       color:"white",
//       backgroundColor: "#616161",
//     }
//   },
//   ZCheckboxComponent: {
//     justifyContent:"end",
//     top: "10%",
//       left: "20px",
//     transform: "translateY(-0%)",
//   },
//   tagPickerOptionCheckbox: {
//     ...shorthands.borderColor("black"),
//   },
//   optionContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     ...shorthands.padding("0.5rem","0"),
//     '&:hover': {
//       color: "white",
//       backgroundColor:"#616161",
//     }
//   },
//   optionLabel: {
    
//   },
//   ZLine: {
//     width: "auto",
//     backgroundColor:"transparent",
  //   },
  
  
  ZTagPicker: {
    borderRadius: "7px",
        border: "1px solid black !important",
    ':active': {
        border: "1px solid black !important",
    },
    ':after': {
      content: "",
      border: "none !important",
    }

  },
  ZExpandIcon: {
    display: "flex",
  justifyContent: "center",
    transform: "translateY(10%)",
    width: "15px",
    height:"25px",
    alignItems:"center",
  },
  ZTagInsideSelect: {
    borderRadius: "10px",
    backgroundColor: "#616161",
      color: "white",
    height: "24px",
      fontSize:"12px !important",
    width: "auto",
    wordBreak: "break-word",
    fontFamily: "Lato",
    ">span>svg": {
      color: "black",
      backgroundColor: "white",
      borderRadius: "50%",
      fontSize: "10px !important",
      fontWeight:"700",
    }
  },
  ZTagPickerListContent: {
    ...shorthands.border("2px", "solid", "lightgreen"), 
    borderRadius: "10px",
    maxHeight: "144px",
  },
  tagPickerOption: {
    '&:hover': {
      color:"white",
      backgroundColor: "#616161",
    }
  },
  tagPickerOptionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ">div>span": {
      fontSize: "12px",
      fontWeight: "600",
      marginLeft: "5px",
      backgroundColor:"green",
    },
    '&:hover': {
      color: "white",
      backgroundColor:"#616161",
    }
  },
  ZLine: {
    width: "auto",
    height:"1px",
    backgroundColor:"transparent",
  }
});
