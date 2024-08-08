import {
    ZButton,
    ZDivider,
    ZHeadSection,
    ZRadio,
    ZSubTitle,
    
  } from "zitics-core-ui";
  
  
  const sectionsHeading = [
    {
      rowLayout: [
        {
          zNoColumns: 1,
          
          fields: [
            {
              key: "headSectionStrip",
              Component: ZHeadSection,
              position: 1,
              props: {
                heading: "Exposure",
                actionPanel:true
              },
            },
          ],
        },
        
      ],
    },
  ];
  const sectionsBase = [
    {
      rowLayout: [
      {
          zNoColumns: 1,
          fields: [
          {
              key: "ZHeadingTitle",
              Component: ZSubTitle,
              position:1,
              props: {
               children:"Existing / Ongoing Loans Summary"
              },
            },
        ]
      },
        {
          zNoColumns: 1,
          
          fields: [
            {
              key: "Radio Component",
              Component: ZRadio,
              position: 1,
              props: {
                ZGlobalLabel: "Do you have existing exposure?",
                Zlabel: ["Yes", "No"],
              },
            },
          ],
        },
        {
          zNoColumns: 1,
          
          fields: [
            {
              key: "Radio Component",
              Component: ZDivider,
              position: 1,
              props: {
              },
            },
          ],
        },
      ],
    },
   
  ];
  
  const sectionsfooter = [
    {
      rowLayout: [
        {
          zNoColumns: 8,
          fields: [
            {
              key: "backButton",
              position: 7,
              Component: ZButton,
              props: {
                children: "Back",
                id: "backButton",
                appearance: "outline",
              },
            },
            {
              key: "nextButton",
              position: 8,
              Component: ZButton,
              props: {
                children: "Next",
                id: "nextButton",
              },
            },
          ],
        },
        
      ],
    },
  ];
  
  
  
  export {  sectionsHeading , sectionsBase , sectionsfooter};
    
    
    
    