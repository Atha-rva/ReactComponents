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
import { Tag, Button, Field, Checkbox } from "@fluentui/react-components";
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
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const newSelectedOptions = event.target.checked
      ? [...selectedOptions, option]
      : selectedOptions.filter((selectedOption) => selectedOption !== option);
    setSelectedOptions(newSelectedOptions);
  };

  const handleAllClear: React.MouseEventHandler = (event) => {
    setSelectedOptions([]);
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
        <TagPickerList className={classes.ZTagPickerListContent}>
          {options.length > 0
            ? options.map((option) => (
                <div key={option} >
                  <Checkbox
                  label={option}
                  labelPosition={'before'}
                  checked={selectedOptions.includes(option)}
                  onChange={(event) => handleCheckboxChange(event, option)}
                  className={classes.tagPickerOptionContainer}
                />
                </div>
              ))
            : "No options available"}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};
