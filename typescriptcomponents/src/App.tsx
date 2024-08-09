import React from "react";
// import { StepperComponent } from "./Components/Stepper";
// import { ZAccordion } from "zitics-core-ui";
// import { AccordionPanelType } from "./Components/StepperComponent/Props";
// import TagPicker from "./BugsComponent/TagPickerComponent/RenderFile";
// import RadioComponent from "./Components/RadioButton/RenderFile";
// import OtpPassword from "./Components/OTPPassword/Render";
// import TagPickerTypeing from "./Components/TagPicker/Render";
// import TagPickerValidation from "./Components/TagPickerwithValidation/render";
// import TagPickerComponent from "./BugsComponent/TagPickerComponent/RenderFile";
// import ZCheckBoxBtn from "./Components/CheckBox";
import { RadioBtn } from "./Components/RadioButton";
import { ZTagPickerDropdown } from "./BugsComponent/TagPickerComponent";
import ZCheckBoxBtn from "./Components/CheckBox";
import { ZCheckbox } from "zitics-core-ui";

// import { NewZTagPickerDropdown } from "./Components/NewTag";
// import ZPopInfoIcon from "./Components/Gstininfoicon";
// import { FormRenderer } from "./JSONFormat/FormRenderer";
// import ZPresentTextBox from "./Components/TextComponent";
// import { ZTagPickerDropdown } from "./BugsComponent/TagPickerComponent/index";
// import TagPickerContainer from "./Components/TagPicker";
// import TagPickerValidContainer from "./Components/TagPickerwithValidation";

// const jsonTemplate = {
//   uilayout: {
//     elements: [
//       {
//         id: "section1",
//         layout: "grid",
//         elements: [
//           {
//             id: "radioBtn1",
//             control: "zRadioBtn",
//             label: "Select an Option",
//             options: ["Option 1", "Option 2", "Option 3"],
//             className: "radio-btn-container",
//             Radioclass: "radio-btn",
//             RadioGroupclass: "radio-group",
//             events: [{ onChange: true }, { onBlur: true }],
//             spanColunmns: 1,
//           },
//         ],
//       },
//     ],
//   },
// };

const App = () => {
  return (
    <div>
      {/* <h1>Form Renderer POC</h1>
      <FormRenderer template={jsonTemplate} /> */}
      {/* <StepperComponent/> */}
      {/* <TagPicker/> */}
      {/* <RadioComponent/> */}
      {/* <OtpPassword /> */}
      {/* <TagPickerTypeing/> */}
      {/* <TagPickerValidation/> */}
      {/* <TagPickerComponent/> */}
      {/* <InfoIcon/> */}
      {/* <TagPickerTypeing/> */}
      {/* < ZPopInfoIcon ValidValue={""}/> */}
      {/* <ZCheckBoxBtn Zlabel={"Companies"} Zcheckboxlabel={["Yes","No"]}/> */}
      {/* <TagPickerComponent/> */}
      {/* <RadioBtn ZGlobalLabel="Companies" Zlabel={["Yes", "No"]} /> */}
      {/* <ZTagPickerDropdown zoptions={["Atharva","Deshmukh","Welcome","hsdfjsfdvdvhkvkcxhvkcxvhxckvxckvbxc","jdfjksdjkfxj,vjkvnckncknccbcmbvmcbvmvmcc"]}/> */}
      {/* <NewZTagPickerDropdown style={{width:"150px"}} zoptions={["yerieryieuiryueur",'oeiroeiroeiroieoreiorieroieorieor','oeiroeiroiorioeiroeiroeir','oeiroeiroeiroeiroeiroeiro']}/> */}
      <ZCheckBoxBtn
  Zlabel="Select Activities"
  Zcheckboxlabel={["Option 1", "Option 2", "Option 3"]}
  onOptionSelect={(selectedValues: any) => console.log("Selected values:", selectedValues)}
/>
      <ZCheckbox
        Zlabel="Select Activities"
        Zcheckboxlabel={["Option 1", "Option 2", "Option 3"]}
        onChange={(event: any, data: any) =>
          console.log("Selected values:", data)
        }
      />
    </div>
  );
};
export default App;
