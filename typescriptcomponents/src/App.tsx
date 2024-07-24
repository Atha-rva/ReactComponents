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
import {
  NotificationPopover,
  SearchWithDropdown,
} from "./Components/SearchWithDropdown";
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
import { SpinnerContainer } from "./Components/Spinner";
import ASpinner from "./Components/Spinner/ASpinner";
import { LanguageDropdown } from "./Components/LanguageDropDown";
import { ZPopover, ZTable } from "zitics-core-ui";
import ZPopInfo from "./Components/InfoIcon";
import { FocusableElementsInCells } from "./VerticalTableLayout";
import GridLayout from "./GridLayout";
import ADropdown from "./Components/Scrollbar";
import ZScrollBar from "./Components/Scrollbar";
import CustomScrollbar from "./Components/Scrollbar";
import { OrgStatus } from "./Components/PopoverStatus";
import { RadioBtn } from "./Components/RadioButton";
import { useStyles } from "./style";
import TagPickerContainer from "./Components/TagPicker";
// import { ManufacturingTagPickerContainer } from "./Components/TagPickerComponentwithdropdowncheckbox";
import { ZTagPickerContainer } from "./Components/TagpickerDropdown";
import { ZDropdown } from "./Components/Dropdown";
import { ZTagDropdown } from "./Components/TagDropdown";
import TagPickerValidContainer from "./Components/TagPickerwithValidation";
import { ManufacturingTagPickerContainer } from "./Components/TagPickerComponentwithdropdowncheckbox";
// import { ZTagDropdown } from "./Components/TagDropdown";
// import { ZTagDropdown } from "./Components/TagDropdown";

// import { DropdownContent } from "./Components/TablePopover";

function App() {
  const classes = useStyles();

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

  // const searchDropdownProps = {
  //   placeholder: 'Search...',
  //   options: ['Option 1', 'Option 2', 'Option 3'],
  //   linkLabel: 'See more results',
  //   varient: 'large',
  // };

  // const notificationPopoverProps = {
  //   btnData: {}, // your button data here
  //   tabs: [
  //     {
  //       heading: {
  //         label: 'Tab 1',
  //         notificationNum: 3,
  //       },
  //       data: [
  //         { label: 'Notification 1', time: '2 mins ago', read: true },
  //         { label: 'Notification 2', time: '1 hour ago', read: false },
  //         { label: 'Notification 1', time: '2 mins ago', read: true },
  //         { label: 'Notification 2', time: '1 hour ago', read: false },
  //         { label: 'Notification 1', time: '2 mins ago', read: true },
  //         { label: 'Notification 2', time: '1 hour ago', read: false },
  //           { label: 'Notification 1', time: '2 mins ago', read: true },
  //         { label: 'Notification 2', time: '1 hour ago', read: false },
  //       ],
  //     },
  //     {
  //       heading: {
  //         label: 'Tab 2',
  //         notificationNum: 5,
  //       },
  //       data: [
  //         { label: 'Notification 3', time: '1 day ago', read: true },
  //         { label: 'Notification 4', time: '2 days ago', read: false },
  //       ],
  //     },

  //   ],
  //   label: 'Notifications',
  // };

  const colKey = ["status", "name", "address", "collageName"];
  const headings = [
    { label: <OrgStatus children={<></>} positioning={"below"} /> },
    { label: "Name" },
    { label: "Address" },
    { label: "Collage Name" },
  ];
  const data = [
    { name: "Atharva", address: "Pune", collageName: "XYZ" },
    // { name: "Jayesh", address: "Mumbai", collageName: "ABC" },
    // { name: "Vishal", address: "Bangalore", collageName: "XYZ" },
    // { name: "Chetan", address: "Delhi", collageName: "ABC" },
  ];

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
        options={["ABC", "XYZ", "HHH","ABC", "XYZ", "HHH","ABC", "XYZ", "HHH",]}
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
      {/* <OrganisationStatus handleSetSelectedItems={undefined}/> */}
      {/* <SpinnerContainer/> */}
      {/* <ASpinner/> */}
      {/* <SearchWithDropdown {...searchDropdownProps} /> */}
      {/* <NotificationPopover {...notificationPopoverProps} /> */}
      {/* < LanguageDropdown/> */}
      {/* <ZPopover/> */}
      {/* <ZPopInfo ValidValue={""} mainAxis={20} /> */}
      {/* <FocusableElementsInCells/> */}
      {/* <GridLayout/> */}
      {/* <ScrollbarContainer /> */}
      {/* <ADropdown/> */}
      {/* <OrganisationStatus handleSetSelectedItems={undefined} /> */}
      {/* <ZScrollBar/> */}
      {/* <ADropdown/> */}
      {/* <div style={{ height: "100vh", width: "100vw" }}>
        <CustomScrollbar width="300px" height="250px">
          <div style={{ height: "600px", padding: "20px" }}></div>
        </CustomScrollbar>
      </div> */}
      {/* <div
        style={{
          width: "50vw",
          height: "50vw",
          borderRadius: "10px",
          marginLeft: "500px",
          marginTop: "200px",
        }}
      >
        <ZTable zcolKeys={colKey} zheadings={headings} zdata={data}></ZTable>
      </div> */}
      {/* <RadioBtn RadioGroupclass={classes.root}   ZGlobalLabel="Applicable Companies" Zlabel={["Atharva","Jayesh","Rahul sir","Vishal"]}/> */}
      {/* <TagPickerContainer className={""} fieldName={"GSTIN"}/> */}

      {/* <ManufacturingTagPickerContainer
        className={""}
        fieldName={"Applicable Companies"}
        options={[
          "Atharva",
          "Jayesh",
          "Suresh",
          "Ramesh",
          "Vishal",
          "Chetan",
          "Rahul Sir ",
          "Sammer Sir",
          "Rutuja Sir",
        ]}
      /> */}
      {/* <ManufacturingTagPickerContainer className={""} fieldName={""} options={[]}/> */}
      {/* <ZDropdown zoptions={["Atharva","Vishal","Ramesh","Suresh","Falkesh","vishal","Ramu","Rahul Sir","Rutuja Maam","Sameer Sir"]} multiselect/> */}
      {/* <ManufacturingTagPickerContainer className={""} fieldName={""} options={["Atharva","Rohit","Vishal","Pankaj","Ganesh","Mahadev"]}/> */}
      {/* <LanguageDropdown/> */}
      {/* <ZTagDropdown zoptions={["Atharva","Vishal","Ramesh","Suresh","Falkesh","vishal","Ramu","Rahul Sir","Rutuja Maam","Sameer Sir"]} multiselect/> */}
      {/* <TagPickerContainer className={""} fieldName={"GSTIN"} /> */}
      {/* <TagPickerValidContainer className={""} fieldName={"Applicable Companies"}/> */}
      {/* <ManufacturingTagPickerContainer className={""} fieldName={""} options={["Atharva","Vishal","Ramesh","Suresh","Falkesh","vishal","Ramu","Rahul Sir","Rutuja Maam","Sameer Sir"]}/> */}
      {/* <ZTagPickerContainer className={""} fieldName={"Companies"} options={["Atharva", "Vishal", "Ramesh", "Suresh", "Falkesh", "vishal", "Ramu", "Rahul Sir", "Rutuja Maam", "Sameer Sir"]} /> */}
      <div
        style={{
          width: "50vw",
          height: "30vw",
          border: "2px solid black",
          overflow: "scroll",
          marginLeft: "500px",
          marginTop: "100px",
          zIndex:1000,
        }}
      >
        <div style={{ width: "950px" }}>
          <ManufacturingTagPickerContainer
            className={""}
            fieldName={"Sub-Sectors Automotive & Automotive Components"}
            options={[
              "Automotive & Automotive Components",
              "Consumer Electronics & Appliances",
              "FMCG",
              "Automobiles - Medium and Heavy Commercial Vehicles",
              "Automobiles - Motorcycles",
              "Automobiles - Passenger Cars",
            ]}
          />
        </div>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nisi
          enim rerum in facere eos inventore nihil recusandae numquam sunt.
          Omnis beatae officia enim dignissimos qui maiores error nesciunt
          delectus adipisci libero. Sed, id nihil. Molestias eaque
          necessitatibus nesciunt provident obcaecati saepe incidunt perferendis
          blanditiis, adipisci ex labore alias nobis placeat ad corrupti earum
          doloremque, facere tempore voluptate? Expedita cumque doloremque hic
          voluptas autem alias rerum, fugit repellendus recusandae omnis optio,
          nostrum velit voluptate, est asperiores perferendis molestiae
          exercitationem tempore? Odio expedita blanditiis totam vero
          laudantium, ducimus accusamus ratione id esse tempora quis dolorem
          quidem maxime, dignissimos provident nobis consequatur explicabo
          asperiores minus corrupti quisquam doloremque odit nemo earum. Ut a
          porro obcaecati, nam dolorum delectus et modi possimus adipisci ullam
          iste optio, necessitatibus nobis exercitationem! Aliquam adipisci
          voluptates saepe consequuntur quae voluptatem sapiente mollitia
          eveniet non deleniti, dicta, id quasi sit minima iusto. Expedita sequi
          nesciunt rerum eius tempore, velit voluptas dolor magni laudantium
          adipisci odio earum facilis amet deleniti. Praesentium fugit, quia
          possimus animi odit magnam eius cum. Harum perspiciatis nihil nesciunt
          quidem hic qui tempore inventore, ipsam ipsum alias architecto nemo
          fugiat rem aperiam adipisci accusamus quo dolorem necessitatibus,
          voluptatibus neque, voluptatum ullam? Quidem tempora molestias
          similique!
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nisi
          enim rerum in facere eos inventore nihil recusandae numquam sunt.
          Omnis beatae officia enim dignissimos qui maiores error nesciunt
          delectus adipisci libero. Sed, id nihil. Molestias eaque
          necessitatibus nesciunt provident obcaecati saepe incidunt perferendis
          blanditiis, adipisci ex labore alias nobis placeat ad corrupti earum
          doloremque, facere tempore voluptate? Expedita cumque doloremque hic
          voluptas autem alias rerum, fugit repellendus recusandae omnis optio,
          nostrum velit voluptate, est asperiores perferendis molestiae
          exercitationem tempore? Odio expedita blanditiis totam vero
          laudantium, ducimus accusamus ratione id esse tempora quis dolorem
          quidem maxime, dignissimos provident nobis consequatur explicabo
          asperiores minus corrupti quisquam doloremque odit nemo earum. Ut a
          porro obcaecati, nam dolorum delectus et modi possimus adipisci ullam
          iste optio, necessitatibus nobis exercitationem! Aliquam adipisci
          voluptates saepe consequuntur quae voluptatem sapiente mollitia
          eveniet non deleniti, dicta, id quasi sit minima iusto. Expedita sequi
          nesciunt rerum eius tempore, velit voluptas dolor magni laudantium
          adipisci odio earum facilis amet deleniti. Praesentium fugit, quia
          possimus animi odit magnam eius cum. Harum perspiciatis nihil nesciunt
          quidem hic qui tempore inventore, ipsam ipsum alias architecto nemo
          fugiat rem aperiam adipisci accusamus quo dolorem necessitatibus,
          voluptatibus neque, voluptatum ullam? Quidem tempora molestias
          similique!
        </span>
        <div style={{ width: "950px", marginTop: "20px" }}>
          <ManufacturingTagPickerContainer
            className={""}
            fieldName={"Sub-Sectors Automotive & Automotive Components"}
            options={[
              "Automotive & Automotive Components",
              "Consumer Electronics & Appliances",
              "FMCG",
              "Automobiles - Medium and Heavy Commercial Vehicles",
              "Automobiles - Motorcycles",
              "Automobiles - Passenger Cars",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
