import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import { InputComponent } from './Components/Input';
// import { Appearance } from './Components/Button';
// import { SwitchLabel } from './Components/Switch';
// import ZRadio from './Components/Radio/index';
// import { SwitchLabel } from "./Components/Switch";
// import { Appearance } from "./Components/Button";
// import { InputComponent } from "./Components/Input";
// // import ZRadio from './Components/Radio';
// import { RadioBtn } from "./Components/RadioButton";
// import { useStyles } from "./style";
// import { AppearanceBtn } from "./Components/VarientButton";
// import { ToastApplication } from "./Components/Toast";
// import { TagComponent } from "./Components/Tag";
// import { DefaultModel } from "./Components/ModelComponent";
// import VerticalLayout from "./Components/LayoutComponent";
// import { Actions } from "./Components/DialogBox/Dialog";
// import { NoteModel } from "./Components/NoteModel";
// import { XChangeNoteModel } from "./Components/XChangeNoteModel";
// import { AvatarBadge } from "./Components/AvatarComponent";
// import TagPickerContainer from "./Components/TagPicker";
// import ZCheckBoxBtn from "./Components/CheckBox";
// // import { RadioBtn } from "./Components/RadioButton";
// import { ZRadio, ZThreeDotHamburg } from "zitics-core-ui";
// import { ManufacturingTagPickerContainer } from "./Components/TagPickerComponentwithdropdowncheckbox";
// import { NotificationPopover } from "./Components/SearchWithDropdown";
// import { ZPopover } from "./Components/PopOver";
// import { AlignmentComponent } from "./Components/VerticalAlignment.tsx";
// import { HorizontalAlignmentComponent } from "./Components/HorizontalAlignment";
// import { Line } from "./Components/Divider";
import { ThreeDotDropdown } from "./Components/ThreeDotDropdown";
// import DotDropdown from "./Components/ThreeDotDropdown";
// import ThreeDotDropDown from "./Components/ThreeDotDropdown";
// import { Divider } from "@fluentui/react-components";
// import DotImg from "../src/Components/ThreeDotDropdown/threedot.svg"
import EditIcon from "../src/Components/ThreeDotDropdown/PencilImg.svg";
import DeleteIcon from "../src/Components/ThreeDotDropdown/DeleteLogo.svg";
import { Line } from "./Components/Divider";
import { OrganisationStatus } from "./Components/StatusOrganization";

function App() {
  // const classes = useStyles();

  const menuItems = [
    {
      label: "Edit",
      imageSrc: EditIcon,
      onClick: () => console.log("Edit Clicked"),
    },
    {
      label: "Delete",
      imageSrc: DeleteIcon,
      onClick: () => console.log("Delete Clicked"),
    },
  ];

  const handleChange = (label: string) => {
    console.log("Selected Item", label);
  };
  return (
    <div className="App">
      {/* <InputComponent fieldName='Email*'/>
      <Appearance/>
      <SwitchLabel labels={["InputBox", "OutputBox"]} hideswitch={false} switchisabled={true} /> */}

      {/* <ZRadio ZradioLabel={'Atharv'} Zvalue={["Yes","No"]} Zdisabled={false} zhide={false}/> */}

      {/* <RadioBtn ZGlobalLabel='Applicable Companies' Zlabel={["Yes", "No"]} Zhide={false} /> */}
      {/* <VarientButton/> */}
      {/* <AppearanceBtn /> */}
      {/* <TagComponent /> */}
      {/* <DefaultModel/> */}
      {/* <NoteModel /> */}
      {/* <XChangeNoteModel/> */}
      {/* <AvatarBadge name="Atharva Deelip Deshmukh" status="busy"/> */}
      {/* <TagPickerContainer className={""} fieldName={"GSTIN"} /> */}
      {/* <ZCheckBoxBtn Zlabel={"Applicable Companies"} Zcheckboxlabel={["Yes","No"]}/> */}
      {/* <RadioBtn ZGlobalLabel="Companies" Zlabel={["Yes", "No"]} Zhide={false} /> */}
      {/* <ZRadio ZGlobalLabel="Companies" Zlabel={["Yes"]} Zhide={false} /> */}
      {/* <ZCheckBoxBtn Zlabel={"Companies"} Zcheckboxlabel={["Yes","No"]}/> */}
      {/* <ManufacturingTagPickerContainer className={""} fieldName={"Companies"} options={["Atharva", "Jayesh", "Vishal", "Chetan", "Rahul Sir", "Sagar Sir"]} /> */}
      {/* <TagPickerContainer className={""} fieldName={"Companies"}/> */}
      {/* <NotificationPopover btnData={undefined} tabs={[]}  /> */}
      {/* <ZPopover
        buttonIcon={"GCGHGJHG"}
        varient="small"
        options={["ABC", "XYZ", "HHH"]}
      /> */}
      {/* <AlignmentComponent /> */}
      {/* <HorizontalAlignmentComponent/> */}
      {/* <TagPickerContainer fieldName="Companies" className={""}/> */}
      {/* <Line/> */}

      {/* <ThreeDotDropdown
        items={menuItems}
        borderColor="#A869E9"
        onChange={handleChange}
      /> */}
      <OrganisationStatus handleSetSelectedItems={undefined}/>
    </div>
  );
}

export default App;
