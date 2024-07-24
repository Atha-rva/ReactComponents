import * as React from "react";
import {
  Button,
  Field,
  InfoLabel,
  Link,
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

interface MyComponentProps {
  className: string;
  fieldName: string;
}

const ZTagError =
  "https://s3.ap-south-1.amazonaws.com/dev.zitics.com/media/core/assets/image/TagError.svg";

const GSTIN_REGEX = /^[0-9A-Z]{15}$/; // Basic validation regex for GSTIN

const TagPickerValidContainer: React.FC<MyComponentProps> = ({
  className,
  fieldName,
}) => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [options, setOptions] = React.useState<string[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const classes = useStyles();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setInputValue(event.target.value);
    setError(null);
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue && !options.includes(trimmedValue)) {
        if (GSTIN_REGEX.test(trimmedValue)) {
          setOptions([...options, trimmedValue]);
          setSelectedOptions([...selectedOptions, trimmedValue]);
          setInputValue("");
        } else {
          setError("Invalid GSTIN format. Please enter a valid GSTIN.");
        }
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
    (option) =>
      !selectedOptions.includes(option) &&
      option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Field className={classes.ZTagContainer}>
      <div style={{ display: "flex", gap: "5px" }}>
        {fieldName}
        <InfoLabel
          info={
            <>
              This is example information for an InfoLabel.{" "}
              <Link href="https://react.fluentui.dev">Learn more</Link>
            </>
          }
        />
      </div>
      <TagPicker
        onOptionSelect={handleOptionSelect}
        selectedOptions={selectedOptions}
        size={"large"}
      >
        <TagPickerControl
          className={error ? classes.ZTagPickerError : classes.ZTagPicker}
          expandIcon={null}
        >
          <TagPickerGroup>
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                value={option}
                className={classes.ZTagInsideSelect}
                shape={"circular"}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            aria-describedby="gstin-error"
          />
          <Button
            appearance="transparent"
            size="large"
            shape="rounded"
            onClick={handleAllClear}
          >
            <ZLogo className={classes.ZCrossBtn} src={ZTagError} />
          </Button>
        </TagPickerControl>
        <TagPickerList className={classes.ZTagPickerList}>
          {tagPickerOptions.map((option) => (
            <TagPickerOption key={option} value={option}>
              {option}
            </TagPickerOption>
          ))}
        </TagPickerList>
      </TagPicker>
      {error && (
        <div id="gstin-error" className={classes.ZWrongGstinMsg}>
          {error}
        </div>
      )}
    </Field>
  );
};

export default TagPickerValidContainer;
