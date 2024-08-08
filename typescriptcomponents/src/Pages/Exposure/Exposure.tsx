// import React from "react";
// import { ZRowLayout, ZSectionAccordion } from "zitics-core-ui";
// import {
//   sectionsHeading,
//   sectionsBase,
//   sectionsfooter
// } from "../../../../DummyData/Exposure/ExposureJSON";
// import { useStyles } from "./Exposurecss";
// import { useNavigate } from "react-router-dom";

// const AllExposure = () => {

//   const navigate = useNavigate();

//   const onNextClick = () => {
//     navigate("/basic-profile");
//   };

//   const onBackClick = () => {
//     navigate("/basic-profile");
//   };


//   const classes = useStyles();
//   const componentsProps = [
//     {
//       key: "backButton",
//       otherProps: {
//         onClick:onBackClick
//       },
//     },
//     {
//       key: "nextButton",
//       otherProps: {
//         onClick:onNextClick
//       },
//     },
//   ];

  
//   return (
//     <div className={classes.container}>
//       {sectionsHeading.map((section: any) => {
//         return (
//           <>
//             <>
//               {section.rowLayout.map((rowLayout: any) => {
//                 // const { zNoColumns, fields } = rowLayout;
//                 const { fields } = rowLayout;

//                 return (
//                   <ZRowLayout
//                     zNoColumns={rowLayout.zNoColumns}
//                     zchildrens={fields}
//                     zotherProps={[]}
//                   />
//                 );
//               })}
//             </>
//           </>
//         );
//       })}
//       <div className={classes.subcontainer}>
//         {sectionsBase.map((section: any) => {
//           return (
//             <>
//               <>
//                 {section.rowLayout.map((rowLayout: any) => {
//                   const { zNoColumns, fields } = rowLayout;
//                   return (
//                     <ZRowLayout
//                       zNoColumns={rowLayout.zNoColumns}
//                       zchildrens={fields}
//                       zotherProps={componentsProps}
//                     />
//                   );
//                 })}
//               </>
//             </>
//           );
//         })}
//       </div>
//       <div className={classes.BtnContainer}>
//         {sectionsfooter.map((section: any) => {
//           return (
//             <>
//               <>
//                 {section.rowLayout.map((rowLayout: any) => {
//                   const { zNoColumns, fields } = rowLayout;
//                   return (
//                     <ZRowLayout
//                       zNoColumns={rowLayout.zNoColumns}
//                       zchildrens={fields}
//                       zotherProps={componentsProps}
//                     />
//                   );
//                 })}
//               </>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AllExposure;

import React from 'react'

const Exposure = () => {
  return (
    <div>
      
    </div>
  )
}

export default Exposure

