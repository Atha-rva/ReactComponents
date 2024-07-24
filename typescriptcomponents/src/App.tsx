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
import {
  ZCheckbox,
  ZHeadSection,
  ZPopover,
  ZSectionAccordion,
} from "zitics-core-ui";
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
import { ZTagPickerComponent } from "./BugsComponent/NewTagPicker";
import { ZSearchInput } from "./Components/ZSearchInput";
import ZThreeDotHamburg from "./Components/ThreeDotHumberg";
import ZThreeDotComponent from "./Components/ThreeDotHumberg";
import { ZNavigateArrow } from "./Components/NavigationArrow";
// import { ZThreeDotHamburg } from "./Components/ThreeDotHumberg";
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

  // Z Serach Input

  const handleonClick = () => {
    console.log("Input Clicked");
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
      {/* <div style={{width:"50vw"}}>

      <ZSectionAccordion collaspeHeading="Bug Tag Picker Reslover" >
      <div
        >
          


            
        <div style={{  }}>
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
          similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum id, repudiandae laudantium quae, nulla, a ipsa harum necessitatibus molestias distinctio. Nam, a optio voluptatum veniam voluptates fuga cupiditate odio assumenda voluptate velit praesentium corrupti beatae reprehenderit cum non vel expedita eligendi quibusdam consectetur veritatis dolores neque laudantium. Recusandae perspiciatis maiores rem harum et deserunt dolore quaerat quae iusto? Nihil quis dolor, ipsam nam odit nostrum. Neque repellendus consectetur placeat molestiae ipsam. Dicta, maiores dolor necessitatibus omnis modi ullam voluptates repellendus quae commodi dolore nesciunt in nulla veniam fuga error atque non, assumenda perferendis? Neque porro animi eaque omnis distinctio necessitatibus quaerat est maiores ipsum temporibus, magnam ut cum tempore quas eveniet tenetur corporis repudiandae consequuntur dolores sapiente minus culpa, voluptates nemo? Iure porro id harum perspiciatis laborum quasi consequuntur odit maxime! Quam ab aliquid nulla praesentium! Suscipit iste itaque sunt. Sed in itaque aliquam nisi rerum. Eum qui blanditiis dolores excepturi facilis suscipit rerum veniam cupiditate unde ut consequuntur, est ipsam, quisquam ducimus facere debitis ab sequi maiores sit odio sed? Doloremque repellendus reprehenderit dignissimos tempora, animi molestiae atque hic omnis laudantium mollitia quo a provident error explicabo ut neque ullam nam adipisci possimus dolorem ipsum voluptatibus veritatis voluptates quia. Dicta sapiente dolorem saepe qui minima suscipit molestias ut, quisquam unde eaque facilis atque, enim iusto inventore natus, cumque delectus vitae a iste ipsa maxime. Aliquam nulla iste quidem quisquam illum animi a odio culpa sunt enim impedit exercitationem repellendus architecto cupiditate ut, quod eveniet. Dolore eveniet officiis deserunt, maxime eos, vero rem quasi laboriosam inventore sequi quos illo, debitis possimus quod officia tempora minima doloribus. Corporis assumenda odit, fugit, dolorem ab atque qui et saepe, quo quidem quibusdam possimus nostrum. Amet exercitationem ad eum doloribus, provident culpa laudantium rem tempore perspiciatis sapiente debitis quas. Molestias mollitia aperiam modi ratione dolores, voluptatibus illum delectus ducimus sapiente. Fuga, facere soluta facilis magnam culpa modi eligendi repellendus, voluptates, vero hic ipsam libero consequuntur deserunt quisquam quas repudiandae eaque omnis illum excepturi id nihil accusantium quo porro. Dolore provident, repellat necessitatibus aliquid optio suscipit cum eaque at nemo soluta nostrum nihil laboriosam impedit sequi architecto autem? Illum aperiam ea dolores iure aspernatur fugit molestiae corporis. Vero non consectetur nesciunt qui placeat, ut quod iure, dignissimos distinctio sint expedita minima nemo ipsum at, tenetur eveniet atque ex! Quis neque, ut expedita accusamus distinctio quidem laboriosam quia repudiandae? Exercitationem laboriosam iure perferendis aliquam corrupti. Unde ipsum soluta eveniet libero laudantium ducimus atque laborum eius accusantium explicabo eos, iure vitae tempora minima. Ducimus id minus dolor ut earum, nostrum totam laboriosam velit ab aliquam odit quis adipisci molestias debitis veniam omnis explicabo aut consequuntur eveniet qui atque. Impedit eius numquam culpa laborum, perspiciatis temporibus earum sit eveniet suscipit ad nemo laudantium, vitae quidem necessitatibus iure facilis blanditiis commodi repudiandae quia architecto quam. Eum provident praesentium cum quidem voluptatem tenetur eaque temporibus sed, enim consectetur, ipsam harum. Ad illo maxime error blanditiis repellendus! Iste dignissimos ipsum possimus consequatur officiis, similique voluptas inventore vitae eos sed nulla a corporis itaque laboriosam numquam dolore facere maxime esse error explicabo ad repellendus unde ut totam? Alias reprehenderit officiis ducimus perspiciatis nobis animi assumenda impedit, molestiae rem provident distinctio eaque architecto doloribus ex expedita iure rerum eos quia! Culpa, tenetur quidem! Suscipit dicta nihil iure harum inventore eos cupiditate aut, voluptas commodi minima modi consequuntur nostrum tempora deleniti repudiandae sed, doloribus animi accusamus. Perspiciatis laborum eos beatae hic sapiente recusandae fuga iure eligendi, cumque neque tempora consectetur ipsam natus quia officia aliquam magnam dolore et adipisci, quis eveniet dicta! Autem, consequuntur. Dolorum vero neque cumque autem, pariatur laboriosam et odit repudiandae incidunt necessitatibus quaerat, aliquid eum ipsam suscipit. Libero culpa porro ullam laborum minima asperiores voluptates temporibus! Placeat, ducimus laborum natus est asperiores quam distinctio, quisquam aut, mollitia excepturi unde labore reiciendis quo neque accusantium explicabo eligendi at? Pariatur quo facere amet. Sed, hic aspernatur voluptatum nobis nisi nulla vitae eligendi placeat officiis expedita aliquid natus consequatur deserunt impedit exercitationem doloremque ex quidem harum accusantium! Modi odit totam aspernatur doloremque ex laboriosam asperiores libero vitae quasi odio corporis officiis, fugit a facere praesentium nisi neque ipsam rerum repudiandae reiciendis ad veniam nihil? Quis sint blanditiis quisquam nam illum laboriosam excepturi quas molestias id ducimus provident eveniet, beatae quia. Eaque ipsam architecto nobis ipsa aliquid laborum numquam voluptate reiciendis temporibus placeat fugit veritatis saepe et veniam consequatur, expedita doloremque iusto aliquam quia omnis nihil! Ab dolorum obcaecati at nemo ipsum ipsa autem in excepturi minima totam iusto adipisci cum, veritatis qui. Laborum numquam quo expedita enim nobis consectetur a, cum totam dolore repellat facere maiores necessitatibus assumenda perspiciatis aspernatur libero ut temporibus! Quibusdam eaque ipsam doloribus eveniet et facere, quisquam reprehenderit. Possimus rem deleniti distinctio aliquid reprehenderit. Consequatur nostrum consectetur tempore quod recusandae. Quis distinctio vero, aut quae veritatis deserunt eligendi! Veritatis reprehenderit non ex dolore culpa a, vero quis aspernatur at ducimus. Officiis aut nihil incidunt ipsam aliquam possimus commodi, totam cumque, quisquam autem dolores! Eaque impedit non omnis libero exercitationem quaerat id numquam voluptates blanditiis reiciendis asperiores eius autem modi provident repellat vitae nisi nulla sed obcaecati, delectus praesentium alias nihil tempora rem? Alias ducimus earum, doloribus fugiat provident ab et similique, deleniti numquam a in recusandae unde aliquid adipisci quos assumenda. Debitis ex reprehenderit impedit quo ducimus esse! Repellendus voluptatibus voluptatem minima eius fuga dignissimos praesentium corrupti voluptas ipsum ab. In nemo illo sunt culpa iure doloribus. Porro magnam, recusandae, iure amet expedita voluptatem molestias commodi tempore nam, magni aspernatur! Nobis deserunt ratione veritatis hic iusto ullam tempora laboriosam consequuntur officia assumenda quidem porro sunt quaerat, nulla aperiam libero sit nam vel sapiente fugit asperiores! Voluptate repellat sunt et aut enim voluptatum nisi quasi! Ut neque vitae consectetur architecto illum ipsum, reprehenderit ullam qui error nisi odio esse repellat eius doloremque magni voluptate placeat voluptatibus nam laborum iste necessitatibus explicabo nulla! Vero rerum fuga debitis, laborum a rem ipsum, unde veritatis molestias est omnis! Quo mollitia illum cum, qui itaque quam aliquam, perspiciatis maxime est repudiandae quis veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsum. Autem eum distinctio reprehenderit dolorem ipsa iure assumenda odio quae nihil? Eveniet consequuntur soluta possimus corrupti laboriosam numquam atque, dolorum perferendis mollitia rem maiores sunt illum. Natus, iusto! Assumenda vel in voluptas fuga distinctio ratione autem repellat nemo iusto voluptatem consequatur aperiam sequi optio deserunt unde, officia veritatis minima mollitia nihil ipsum. Quisquam totam culpa, molestias, aspernatur ab provident deserunt nemo exercitationem veniam eum corporis maxime magnam, minima fugiat quibusdam aliquid quia libero nulla fuga consequatur distinctio perferendis tempore illo ut. Ullam alias totam nostrum ut praesentium neque et sint eius, similique nulla nobis. Maxime praesentium modi molestias nobis. Sunt, debitis. Temporibus corrupti quae voluptatum, libero illum cupiditate dolore nam voluptatem dolorem rerum accusamus odio quasi explicabo tempora sit hic nesciunt dolor quo laboriosam, quaerat mollitia dignissimos? Similique dolores ipsam, ducimus tempora fugiat cum amet quibusdam asperiores voluptate vitae quod non tempore? Placeat sapiente natus omnis ipsa impedit earum minus est beatae nemo repellat deleniti ea culpa commodi dignissimos aperiam ratione veritatis, saepe similique deserunt quos praesentium maxime asperiores sit perspiciatis. Odit esse pariatur, vitae nisi adipisci mollitia iusto molestiae quae officia, a distinctio at ratione aspernatur delectus accusantium corrupti veniam debitis exercitationem nobis quam facere eos. Culpa nesciunt repudiandae iusto id autem asperiores animi, repellat, hic quos ex illo, tenetur totam fugiat saepe ab aliquam doloribus debitis molestiae aliquid inventore consectetur iure sequi vero nemo. Aliquam, mollitia eligendi quam itaque aliquid animi, distinctio illum a omnis corrupti sed quasi. Nesciunt nisi incidunt fugit repellendus quia voluptates quos ab recusandae! Similique id quia nemo eveniet fugit quo ipsum veniam est repudiandae quisquam, eos voluptatem sed temporibus veritatis pariatur quas? Modi voluptas in est velit praesentium ipsa nostrum doloremque id nesciunt architecto obcaecati porro facere neque ad dolore commodi cum corrupti, possimus laudantium eaque? Sit provident doloremque eos ratione repellat nisi molestiae officia corporis sint at corrupti odio suscipit inventore aperiam libero eius, omnis voluptatibus fugit vitae deserunt? Dolorem adipisci sed ut quibusdam, natus dolore velit beatae quod debitis quis temporibus. Deleniti, nesciunt labore! Quod odio quam tempora architecto nulla explicabo minus atque quia itaque, accusantium facilis hic consectetur possimus amet animi porro ducimus aliquam obcaecati? Possimus non dolorum itaque voluptatum reprehenderit odio doloribus maiores, optio fugit cumque, sequi pariatur nam debitis quasi doloremque, nobis blanditiis repudiandae nesciunt esse fuga nostrum est earum! Dolor natus autem quam excepturi laudantium aut amet maiores exercitationem in aspernatur voluptatum fugiat laborum quasi modi vitae consectetur, enim eum eos. Enim voluptate quis eius at repellat a perspiciatis sed incidunt quas, est consequatur ad. Sit dolorem eveniet facilis eius cum fugiat velit aut labore nam? Consequuntur ratione ullam laborum nisi adipisci dolores non. Perferendis officiis id quia, quidem quas praesentium harum sequi rem sint ad qui, optio ut sit doloribus. Ipsa, vitae incidunt veritatis eum sed voluptates ex cum nostrum iusto natus earum sequi delectus illo laborum corrupti! Hic totam facere minus autem, illo voluptates voluptas dolorem alias aspernatur blanditiis, deserunt sunt nesciunt voluptate at consequatur illum perferendis! Doloremque fugiat itaque numquam accusamus cum dolorum qui culpa. Adipisci, velit at! Temporibus doloribus magnam atque ratione vero et, voluptatum similique vitae esse impedit doloremque, accusantium ad placeat reiciendis aspernatur cupiditate nobis, ab tempore. Cumque nostrum obcaecati incidunt qui? Totam fugiat, facere expedita optio nobis temporibus sunt libero dolores excepturi perspiciatis atque deleniti aperiam velit rerum officiis pariatur laudantium dignissimos molestiae quos inventore maxime voluptatibus laboriosam repudiandae! Nam autem ut nihil voluptate laudantium vitae quibusdam deleniti maxime sunt fugiat quo culpa architecto debitis id cumque animi officia, consequuntur, ipsum molestias explicabo repellendus suscipit accusantium. Similique pariatur, voluptatum veritatis aut qui aperiam quas deserunt quaerat quos officiis commodi, voluptas perferendis tempore! Delectus inventore ipsam repellendus fugiat, maxime fugit. Autem, harum et. Quaerat magni aperiam placeat odio deleniti provident sed aut facere quidem architecto quam odit, distinctio fugit eius ab enim nesciunt dicta amet ipsum, facilis a. Odit necessitatibus, saepe cum facere nostrum cumque, ducimus eaque obcaecati quisquam sequi, alias dolores. Quam reiciendis ducimus est, exercitationem minus explicabo quas odit tempore impedit porro nam aliquid dolore culpa necessitatibus dolores aut. Placeat facilis deleniti quisquam, molestias quia sequi nam ex accusantium quo laborum, earum odio tempore deserunt nisi dignissimos aperiam, neque consequuntur eius molestiae aliquid magnam corporis porro! Voluptatem, laudantium mollitia! Quisquam distinctio magnam vel nobis esse libero veniam mollitia necessitatibus error suscipit ea repellendus, obcaecati optio ipsum tenetur architecto culpa aliquid ad nemo maxime reiciendis officia id quo eligendi? Eveniet perspiciatis rem tenetur quod incidunt maxime maiores id voluptatum quam repellat beatae consectetur, perferendis quis sit distinctio nostrum sint commodi? Ducimus magnam fugit possimus libero modi, impedit velit repellendus numquam! Quae, quis ratione deleniti dignissimos et eligendi vero, molestias voluptas incidunt exercitationem quisquam accusantium, consequatur ab odit facilis velit est tempora rerum! Accusantium consequatur recusandae neque consectetur maxime soluta quo id eos aspernatur quia, esse voluptas repellat error ea dolores tempora pariatur. Sequi iusto doloribus reprehenderit expedita repellat facilis blanditiis numquam repellendus odio voluptate, quibusdam unde sapiente perferendis, asperiores suscipit animi hic pariatur vel, cupiditate aspernatur voluptatibus? Fugit tempora tempore, explicabo laboriosam, tenetur maxime optio laudantium ratione officia iusto consequatur commodi veritatis asperiores distinctio repellat incidunt excepturi magnam nihil quis similique error ullam. Blanditiis quisquam soluta dolores voluptate libero id neque consequuntur doloribus, rem expedita fuga facere voluptates enim vero molestias dolorem? Beatae rerum quae dolor. Odio illo veritatis laborum eius fuga debitis minus temporibus! Corrupti a aliquid quod iure ipsa aspernatur placeat soluta impedit maxime iusto aperiam nisi, repellendus velit adipisci eligendi quasi sed quis mollitia rem dolore. Modi, doloremque perferendis beatae quisquam fugiat minus! Debitis vero quod vitae est labore explicabo eligendi ut cumque! Fugit voluptas consequuntur esse harum optio similique ad dolores, sequi laudantium obcaecati doloribus distinctio. Corrupti aliquid, consectetur voluptates rem at non sequi officiis vel, odit, illum nihil eum! Quis, praesentium. Dolor enim ut exercitationem impedit recusandae ullam eaque laudantium nemo nihil soluta? Ut, perferendis! Quidem, quas quisquam hic a libero maxime doloribus, repudiandae laboriosam ducimus voluptatibus similique. Delectus, ut mollitia repellat animi placeat nihil.
          </span>
          <ZCheckbox Zlabel={"Companies"} Zcheckboxlabel={["Yes","No","Yes","No","Yes","No","Yes","No"]}/>
        <div style={{  marginTop: "20px" }}>
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
      </ZSectionAccordion>
      </div> */}
      {/* <div
      >
        <div style={{  }}>
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
          similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum id, repudiandae laudantium quae, nulla, a ipsa harum necessitatibus molestias distinctio. Nam, a optio voluptatum veniam voluptates fuga cupiditate odio assumenda voluptate velit praesentium corrupti beatae reprehenderit cum non vel expedita eligendi quibusdam consectetur veritatis dolores neque laudantium. Recusandae perspiciatis maiores rem harum et deserunt dolore quaerat quae iusto? Nihil quis dolor, ipsam nam odit nostrum. Neque repellendus consectetur placeat molestiae ipsam. Dicta, maiores dolor necessitatibus omnis modi ullam voluptates repellendus quae commodi dolore nesciunt in nulla veniam fuga error atque non, assumenda perferendis? Neque porro animi eaque omnis distinctio necessitatibus quaerat est maiores ipsum temporibus, magnam ut cum tempore quas eveniet tenetur corporis repudiandae consequuntur dolores sapiente minus culpa, voluptates nemo? Iure porro id harum perspiciatis laborum quasi consequuntur odit maxime! Quam ab aliquid nulla praesentium! Suscipit iste itaque sunt. Sed in itaque aliquam nisi rerum. Eum qui blanditiis dolores excepturi facilis suscipit rerum veniam cupiditate unde ut consequuntur, est ipsam, quisquam ducimus facere debitis ab sequi maiores sit odio sed? Doloremque repellendus reprehenderit dignissimos tempora, animi molestiae atque hic omnis laudantium mollitia quo a provident error explicabo ut neque ullam nam adipisci possimus dolorem ipsum voluptatibus veritatis voluptates quia. Dicta sapiente dolorem saepe qui minima suscipit molestias ut, quisquam unde eaque facilis atque, enim iusto inventore natus, cumque delectus vitae a iste ipsa maxime. Aliquam nulla iste quidem quisquam illum animi a odio culpa sunt enim impedit exercitationem repellendus architecto cupiditate ut, quod eveniet. Dolore eveniet officiis deserunt, maxime eos, vero rem quasi laboriosam inventore sequi quos illo, debitis possimus quod officia tempora minima doloribus. Corporis assumenda odit, fugit, dolorem ab atque qui et saepe, quo quidem quibusdam possimus nostrum. Amet exercitationem ad eum doloribus, provident culpa laudantium rem tempore perspiciatis sapiente debitis quas. Molestias mollitia aperiam modi ratione dolores, voluptatibus illum delectus ducimus sapiente. Fuga, facere soluta facilis magnam culpa modi eligendi repellendus, voluptates, vero hic ipsam libero consequuntur deserunt quisquam quas repudiandae eaque omnis illum excepturi id nihil accusantium quo porro. Dolore provident, repellat necessitatibus aliquid optio suscipit cum eaque at nemo soluta nostrum nihil laboriosam impedit sequi architecto autem? Illum aperiam ea dolores iure aspernatur fugit molestiae corporis. Vero non consectetur nesciunt qui placeat, ut quod iure, dignissimos distinctio sint expedita minima nemo ipsum at, tenetur eveniet atque ex! Quis neque, ut expedita accusamus distinctio quidem laboriosam quia repudiandae? Exercitationem laboriosam iure perferendis aliquam corrupti. Unde ipsum soluta eveniet libero laudantium ducimus atque laborum eius accusantium explicabo eos, iure vitae tempora minima. Ducimus id minus dolor ut earum, nostrum totam laboriosam velit ab aliquam odit quis adipisci molestias debitis veniam omnis explicabo aut consequuntur eveniet qui atque. Impedit eius numquam culpa laborum, perspiciatis temporibus earum sit eveniet suscipit ad nemo laudantium, vitae quidem necessitatibus iure facilis blanditiis commodi repudiandae quia architecto quam. Eum provident praesentium cum quidem voluptatem tenetur eaque temporibus sed, enim consectetur, ipsam harum. Ad illo maxime error blanditiis repellendus! Iste dignissimos ipsum possimus consequatur officiis, similique voluptas inventore vitae eos sed nulla a corporis itaque laboriosam numquam dolore facere maxime esse error explicabo ad repellendus unde ut totam? Alias reprehenderit officiis ducimus perspiciatis nobis animi assumenda impedit, molestiae rem provident distinctio eaque architecto doloribus ex expedita iure rerum eos quia! Culpa, tenetur quidem! Suscipit dicta nihil iure harum inventore eos cupiditate aut, voluptas commodi minima modi consequuntur nostrum tempora deleniti repudiandae sed, doloribus animi accusamus. Perspiciatis laborum eos beatae hic sapiente recusandae fuga iure eligendi, cumque neque tempora consectetur ipsam natus quia officia aliquam magnam dolore et adipisci, quis eveniet dicta! Autem, consequuntur. Dolorum vero neque cumque autem, pariatur laboriosam et odit repudiandae incidunt necessitatibus quaerat, aliquid eum ipsam suscipit. Libero culpa porro ullam laborum minima asperiores voluptates temporibus! Placeat, ducimus laborum natus est asperiores quam distinctio, quisquam aut, mollitia excepturi unde labore reiciendis quo neque accusantium explicabo eligendi at? Pariatur quo facere amet. Sed, hic aspernatur voluptatum nobis nisi nulla vitae eligendi placeat officiis expedita aliquid natus consequatur deserunt impedit exercitationem doloremque ex quidem harum accusantium! Modi odit totam aspernatur doloremque ex laboriosam asperiores libero vitae quasi odio corporis officiis, fugit a facere praesentium nisi neque ipsam rerum repudiandae reiciendis ad veniam nihil? Quis sint blanditiis quisquam nam illum laboriosam excepturi quas molestias id ducimus provident eveniet, beatae quia. Eaque ipsam architecto nobis ipsa aliquid laborum numquam voluptate reiciendis temporibus placeat fugit veritatis saepe et veniam consequatur, expedita doloremque iusto aliquam quia omnis nihil! Ab dolorum obcaecati at nemo ipsum ipsa autem in excepturi minima totam iusto adipisci cum, veritatis qui. Laborum numquam quo expedita enim nobis consectetur a, cum totam dolore repellat facere maiores necessitatibus assumenda perspiciatis aspernatur libero ut temporibus! Quibusdam eaque ipsam doloribus eveniet et facere, quisquam reprehenderit. Possimus rem deleniti distinctio aliquid reprehenderit. Consequatur nostrum consectetur tempore quod recusandae. Quis distinctio vero, aut quae veritatis deserunt eligendi! Veritatis reprehenderit non ex dolore culpa a, vero quis aspernatur at ducimus. Officiis aut nihil incidunt ipsam aliquam possimus commodi, totam cumque, quisquam autem dolores! Eaque impedit non omnis libero exercitationem quaerat id numquam voluptates blanditiis reiciendis asperiores eius autem modi provident repellat vitae nisi nulla sed obcaecati, delectus praesentium alias nihil tempora rem? Alias ducimus earum, doloribus fugiat provident ab et similique, deleniti numquam a in recusandae unde aliquid adipisci quos assumenda. Debitis ex reprehenderit impedit quo ducimus esse! Repellendus voluptatibus voluptatem minima eius fuga dignissimos praesentium corrupti voluptas ipsum ab. In nemo illo sunt culpa iure doloribus. Porro magnam, recusandae, iure amet expedita voluptatem molestias commodi tempore nam, magni aspernatur! Nobis deserunt ratione veritatis hic iusto ullam tempora laboriosam consequuntur officia assumenda quidem porro sunt quaerat, nulla aperiam libero sit nam vel sapiente fugit asperiores! Voluptate repellat sunt et aut enim voluptatum nisi quasi! Ut neque vitae consectetur architecto illum ipsum, reprehenderit ullam qui error nisi odio esse repellat eius doloremque magni voluptate placeat voluptatibus nam laborum iste necessitatibus explicabo nulla! Vero rerum fuga debitis, laborum a rem ipsum, unde veritatis molestias est omnis! Quo mollitia illum cum, qui itaque quam aliquam, perspiciatis maxime est repudiandae quis veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ipsum. Autem eum distinctio reprehenderit dolorem ipsa iure assumenda odio quae nihil? Eveniet consequuntur soluta possimus corrupti laboriosam numquam atque, dolorum perferendis mollitia rem maiores sunt illum. Natus, iusto! Assumenda vel in voluptas fuga distinctio ratione autem repellat nemo iusto voluptatem consequatur aperiam sequi optio deserunt unde, officia veritatis minima mollitia nihil ipsum. Quisquam totam culpa, molestias, aspernatur ab provident deserunt nemo exercitationem veniam eum corporis maxime magnam, minima fugiat quibusdam aliquid quia libero nulla fuga consequatur distinctio perferendis tempore illo ut. Ullam alias totam nostrum ut praesentium neque et sint eius, similique nulla nobis. Maxime praesentium modi molestias nobis. Sunt, debitis. Temporibus corrupti quae voluptatum, libero illum cupiditate dolore nam voluptatem dolorem rerum accusamus odio quasi explicabo tempora sit hic nesciunt dolor quo laboriosam, quaerat mollitia dignissimos? Similique dolores ipsam, ducimus tempora fugiat cum amet quibusdam asperiores voluptate vitae quod non tempore? Placeat sapiente natus omnis ipsa impedit earum minus est beatae nemo repellat deleniti ea culpa commodi dignissimos aperiam ratione veritatis, saepe similique deserunt quos praesentium maxime asperiores sit perspiciatis. Odit esse pariatur, vitae nisi adipisci mollitia iusto molestiae quae officia, a distinctio at ratione aspernatur delectus accusantium corrupti veniam debitis exercitationem nobis quam facere eos. Culpa nesciunt repudiandae iusto id autem asperiores animi, repellat, hic quos ex illo, tenetur totam fugiat saepe ab aliquam doloribus debitis molestiae aliquid inventore consectetur iure sequi vero nemo. Aliquam, mollitia eligendi quam itaque aliquid animi, distinctio illum a omnis corrupti sed quasi. Nesciunt nisi incidunt fugit repellendus quia voluptates quos ab recusandae! Similique id quia nemo eveniet fugit quo ipsum veniam est repudiandae quisquam, eos voluptatem sed temporibus veritatis pariatur quas? Modi voluptas in est velit praesentium ipsa nostrum doloremque id nesciunt architecto obcaecati porro facere neque ad dolore commodi cum corrupti, possimus laudantium eaque? Sit provident doloremque eos ratione repellat nisi molestiae officia corporis sint at corrupti odio suscipit inventore aperiam libero eius, omnis voluptatibus fugit vitae deserunt? Dolorem adipisci sed ut quibusdam, natus dolore velit beatae quod debitis quis temporibus. Deleniti, nesciunt labore! Quod odio quam tempora architecto nulla explicabo minus atque quia itaque, accusantium facilis hic consectetur possimus amet animi porro ducimus aliquam obcaecati? Possimus non dolorum itaque voluptatum reprehenderit odio doloribus maiores, optio fugit cumque, sequi pariatur nam debitis quasi doloremque, nobis blanditiis repudiandae nesciunt esse fuga nostrum est earum! Dolor natus autem quam excepturi laudantium aut amet maiores exercitationem in aspernatur voluptatum fugiat laborum quasi modi vitae consectetur, enim eum eos. Enim voluptate quis eius at repellat a perspiciatis sed incidunt quas, est consequatur ad. Sit dolorem eveniet facilis eius cum fugiat velit aut labore nam? Consequuntur ratione ullam laborum nisi adipisci dolores non. Perferendis officiis id quia, quidem quas praesentium harum sequi rem sint ad qui, optio ut sit doloribus. Ipsa, vitae incidunt veritatis eum sed voluptates ex cum nostrum iusto natus earum sequi delectus illo laborum corrupti! Hic totam facere minus autem, illo voluptates voluptas dolorem alias aspernatur blanditiis, deserunt sunt nesciunt voluptate at consequatur illum perferendis! Doloremque fugiat itaque numquam accusamus cum dolorum qui culpa. Adipisci, velit at! Temporibus doloribus magnam atque ratione vero et, voluptatum similique vitae esse impedit doloremque, accusantium ad placeat reiciendis aspernatur cupiditate nobis, ab tempore. Cumque nostrum obcaecati incidunt qui? Totam fugiat, facere expedita optio nobis temporibus sunt libero dolores excepturi perspiciatis atque deleniti aperiam velit rerum officiis pariatur laudantium dignissimos molestiae quos inventore maxime voluptatibus laboriosam repudiandae! Nam autem ut nihil voluptate laudantium vitae quibusdam deleniti maxime sunt fugiat quo culpa architecto debitis id cumque animi officia, consequuntur, ipsum molestias explicabo repellendus suscipit accusantium. Similique pariatur, voluptatum veritatis aut qui aperiam quas deserunt quaerat quos officiis commodi, voluptas perferendis tempore! Delectus inventore ipsam repellendus fugiat, maxime fugit. Autem, harum et. Quaerat magni aperiam placeat odio deleniti provident sed aut facere quidem architecto quam odit, distinctio fugit eius ab enim nesciunt dicta amet ipsum, facilis a. Odit necessitatibus, saepe cum facere nostrum cumque, ducimus eaque obcaecati quisquam sequi, alias dolores. Quam reiciendis ducimus est, exercitationem minus explicabo quas odit tempore impedit porro nam aliquid dolore culpa necessitatibus dolores aut. Placeat facilis deleniti quisquam, molestias quia sequi nam ex accusantium quo laborum, earum odio tempore deserunt nisi dignissimos aperiam, neque consequuntur eius molestiae aliquid magnam corporis porro! Voluptatem, laudantium mollitia! Quisquam distinctio magnam vel nobis esse libero veniam mollitia necessitatibus error suscipit ea repellendus, obcaecati optio ipsum tenetur architecto culpa aliquid ad nemo maxime reiciendis officia id quo eligendi? Eveniet perspiciatis rem tenetur quod incidunt maxime maiores id voluptatum quam repellat beatae consectetur, perferendis quis sit distinctio nostrum sint commodi? Ducimus magnam fugit possimus libero modi, impedit velit repellendus numquam! Quae, quis ratione deleniti dignissimos et eligendi vero, molestias voluptas incidunt exercitationem quisquam accusantium, consequatur ab odit facilis velit est tempora rerum! Accusantium consequatur recusandae neque consectetur maxime soluta quo id eos aspernatur quia, esse voluptas repellat error ea dolores tempora pariatur. Sequi iusto doloribus reprehenderit expedita repellat facilis blanditiis numquam repellendus odio voluptate, quibusdam unde sapiente perferendis, asperiores suscipit animi hic pariatur vel, cupiditate aspernatur voluptatibus? Fugit tempora tempore, explicabo laboriosam, tenetur maxime optio laudantium ratione officia iusto consequatur commodi veritatis asperiores distinctio repellat incidunt excepturi magnam nihil quis similique error ullam. Blanditiis quisquam soluta dolores voluptate libero id neque consequuntur doloribus, rem expedita fuga facere voluptates enim vero molestias dolorem? Beatae rerum quae dolor. Odio illo veritatis laborum eius fuga debitis minus temporibus! Corrupti a aliquid quod iure ipsa aspernatur placeat soluta impedit maxime iusto aperiam nisi, repellendus velit adipisci eligendi quasi sed quis mollitia rem dolore. Modi, doloremque perferendis beatae quisquam fugiat minus! Debitis vero quod vitae est labore explicabo eligendi ut cumque! Fugit voluptas consequuntur esse harum optio similique ad dolores, sequi laudantium obcaecati doloribus distinctio. Corrupti aliquid, consectetur voluptates rem at non sequi officiis vel, odit, illum nihil eum! Quis, praesentium. Dolor enim ut exercitationem impedit recusandae ullam eaque laudantium nemo nihil soluta? Ut, perferendis! Quidem, quas quisquam hic a libero maxime doloribus, repudiandae laboriosam ducimus voluptatibus similique. Delectus, ut mollitia repellat animi placeat nihil.
        </span>
        <div style={{  marginTop: "20px" }}>
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
      </div> */}
      {/* <ZTagPickerComponent/> */}

      {/* <ZSearchInput onClick={handleonClick} /> */}
      {/* <ZTagPickerContainer className={""} fieldName={""} options={["Automotive & Automotive Components",
              "Consumer Electronics & Appliances",
              "FMCG",
              "Automobiles - Medium and Heavy Commercial Vehicles",
              "Automobiles - Motorcycles",
              "Automobiles - Passenger Cars"]}/> */}

      {/* <ZThreeDotComponent /> */}
      <ZNavigateArrow />
      {/* <ZSearchInput/> */}
    </div>
  );
}

export default App;
