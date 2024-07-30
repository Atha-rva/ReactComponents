// import * as React from "react";
// import {
//   TagPicker,
//   TagPickerList,
//   TagPickerInput,
//   TagPickerControl,
//   TagPickerProps,
//   TagPickerOption,
//   TagPickerGroup,
// } from "@fluentui/react-components";
// import { Tag, Button, Field } from "@fluentui/react-components";
// import { useStyles } from "./indexcss";
// import { ZLogo } from "zitics-core-ui";
// import { CaretDownFilled, CaretUp16Filled } from "@fluentui/react-icons";

// interface MyComponentProps {
//   className: string;
//   fieldName: string;
//   options: string[];
// }

// export const ManufacturingTagPickerContainer: React.FC<MyComponentProps> = ({
//   className,
//   fieldName,
//   options,
// }) => {
//   const classes = useStyles();
//   const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
//   const [isExpanded, setIsExpanded] = React.useState(false);

//   const onOptionSelect: TagPickerProps["onOptionSelect"] = (event, data) => {
//     setSelectedOptions(data.selectedOptions);
//   };

//   const handleAllClear: React.MouseEventHandler = (event) => {
//     setSelectedOptions([]);
//   };

//   const handleExpandIconClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const tagPickerOptions = options.filter(
//     (option) => !selectedOptions.includes(option)
//   );

//   const ZTagError =
//     "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/TagError.svg";

//   return (
//     <Field label={fieldName} className={className}>
//       <TagPicker
//         size={"large"}
//         onOptionSelect={onOptionSelect}
//         selectedOptions={selectedOptions}
//         positioning={"below"}
//       >
//         <TagPickerControl
//           expandIcon={
//             <div onClick={handleExpandIconClick}>
//               {isExpanded ? (
//                 <CaretDownFilled className={classes.ZExpandIcon} />
//               ) : (
//                 <CaretUp16Filled className={classes.ZExpandIcon} />
//               )}
//             </div>
//           }
//           className={classes.ZTagPicker}
//           onClick={handleExpandIconClick}
//           secondaryAction={
//             <Button
//               appearance="transparent"
//               size="small"
//               shape="rounded"
//               onClick={handleAllClear}
//               style={{ minWidth: "41px", marginTop: "5px" }}
//             >
//               <ZLogo src={ZTagError} />
//             </Button>
//           }
//         >
//           <TagPickerGroup>
//             {selectedOptions.map((option) => (
//               <Tag
//                 key={option}
//                 shape="rounded"
//                 value={option}
//                 className={classes.ZTagInsideSelect}
//               >
//                 {option}
//               </Tag>
//             ))}
//           </TagPickerGroup>
//           <TagPickerInput aria-label="Select Employees" />
//         </TagPickerControl>
//         <TagPickerList
//           className={classes.ZTagPickerListContent}
//           tabIndex={1} // Adding tabIndex here
//         >
//           {tagPickerOptions.length > 0
//             ? tagPickerOptions.map((option) => (
//                 <div key={option}>
//                   <TagPickerOption
//                     className={classes.tagPickerOption}
//                   value={option}
//                   >
//                     {option}
//                   </TagPickerOption>
//                 </div>
//               ))
//             : "No options available"}
//         </TagPickerList>
//       </TagPicker>
//     </Field>
//   );
// };




import * as React from "react";
import {
  TagPicker,
  TagPickerList,
  TagPickerInput,
  TagPickerControl,
  TagPickerProps,
  TagPickerOption,
  TagPickerGroup,
} from "@fluentui/react-components";
import { Tag, Button, Field } from "@fluentui/react-components";
import { useStyles } from "./indexcss";
import { ZLogo } from "zitics-core-ui";
import { CaretDownFilled, CaretUp16Filled } from "@fluentui/react-icons";

interface MyComponentProps {
  className: string;
  fieldName: string;
  options: string[];
}

export const ManufacturingTagPickerContainer: React.FC<MyComponentProps> = ({
  className,
  fieldName,
  options,
}) => {
  const classes = useStyles();
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onOptionSelect: TagPickerProps["onOptionSelect"] = (event, data) => {
    setSelectedOptions(data.selectedOptions);
    console.log('Selected Options:', data.selectedOptions);
  };

  const handleAllClear: React.MouseEventHandler = (event) => {
    setSelectedOptions([]);
    console.log('All options cleared');
  };

  const handleExpandIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  const ZTagError =
    "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/TagError.svg";

  return (
    <Field label={fieldName} className={className}>
      <TagPicker
        size={"large"}
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
        positioning={"below"}
      >
        <TagPickerControl
          expandIcon={
            <div onClick={handleExpandIconClick}>
              {isExpanded ? (
                <CaretDownFilled className={classes.ZExpandIcon} />
              ) : (
                <CaretUp16Filled className={classes.ZExpandIcon} />
              )}
            </div>
          }
          className={classes.ZTagPicker}
          onClick={handleExpandIconClick}
          secondaryAction={
            <Button
              appearance="transparent"
              size="small"
              shape="rounded"
              onClick={handleAllClear}
              style={{ minWidth: "41px", marginTop: "5px" }}
            >
              <ZLogo src={ZTagError} />
            </Button>
          }
        >
          <TagPickerGroup>
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="rounded"
                value={option}
                className={classes.ZTagInsideSelect}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList
          className={classes.ZTagPickerListContent}
          tabIndex={1} 
        >
          {options.length > 0
            ? options.map((option) => (
                <div key={option}>
                  <TagPickerOption
                    className={classes.tagPickerOption}
                    value={option}
                  >
                    {option}
                  </TagPickerOption>
                </div>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
