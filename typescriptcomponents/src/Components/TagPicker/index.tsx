import * as React from "react";
import {
  Button,
  Field,
  Tag,
  TagPicker,
  TagPickerControl,
  TagPickerGroup,
  TagPickerInput,
  TagPickerList,
  TagPickerOption,
  TagPickerProps,
} from "@fluentui/react-components";
import { useStyles } from "./indexcss";
import { ZLogo } from "zitics-core-ui";

const initialOptions = [
  "Atharva",
  "Alok",
  "Ananya",
  "Girish",
  "Gokul",
  "Gopal",
  "Gulab",
];

interface MyComponentProps {
  className: string;
}

const ZTagError =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/TagError.svg";

const TagPickerContainer: React.FC<MyComponentProps> = ({ className }) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    initialOptions[0],
  ]);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [options, setOptions] = React.useState<string[]>(initialOptions);
  const classes = useStyles();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !options.includes(trimmedValue)) {
        setOptions([...options, trimmedValue]);
        setSelectedOptions([...selectedOptions, trimmedValue]);
        setInputValue("");
      }
    }
  };

  const handleAllClear: React.MouseEventHandler = () => {
    setSelectedOptions([]);
  };

  const handleOptionSelect: TagPickerProps["onOptionSelect"] = (
    event,
    data
  ) => {
    setSelectedOptions(data.selectedOptions);
  };

  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <Field label="GSTIN">
      <TagPicker
        onOptionSelect={handleOptionSelect}
        selectedOptions={selectedOptions}
      >
        <TagPickerControl className={classes.ZTagPicker} expandIcon={null}>
          <TagPickerGroup>
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                value={option}
                className={classes.ZTagInsideSelect}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput
            aria-label="Select Employees"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
          <Button
            appearance="transparent"
            size="small"
            shape="rounded"
            onClick={handleAllClear}
          >
            <ZLogo className={classes.ZCrossBtn} src={ZTagError} />
          </Button>
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0 ? (
            tagPickerOptions.map((option) => (
              <TagPickerOption key={option} value={option}>
                {option}
              </TagPickerOption>
            ))
          ) : (
            <span>No options available</span>
          )}
        </TagPickerList>
      </TagPicker>
    </Field>
  );
};

export default TagPickerContainer;
