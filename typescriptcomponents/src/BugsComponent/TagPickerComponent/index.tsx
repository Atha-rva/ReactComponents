import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  Divider,
  Dropdown,
  Field,
  Option,
  mergeClasses,
  Button,
} from "@fluentui/react-components";
import { CaretDownFilled, CaretUpFilled } from "@fluentui/react-icons";
import { dropdowntype } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

export const ZTagPickerDropdown = React.forwardRef<HTMLButtonElement, dropdowntype>(
  (props, ref) => {
    Lato();
    const [validState, setValidState] = useState<"none" | "valid" | "invalid">(
      "none"
    );

    const [crossAxis] = React.useState(0);
    const [mainAxis] = React.useState(5);

    const {
      zvalidState,
      zoptions = [],
      zrequired,
      className,
      multiselect,
      placeholder,
      onSelectOption,
      selectedOptions = [],
      ...rest
    } = props;
    const styles = useStyles();

    const [isOpen, setIsOpen] = useState(true);
    const [currentSelectedOptions, setCurrentSelectedOptions] =
      useState<string[]>(selectedOptions);

    const handleOpenChange = (ev: any, data: { open?: boolean }) => {
      setIsOpen(!data.open);
    };

    const handleSelectOption = (event: any, optionValue?: string) => {
      if (!optionValue) return;
      let newSelectedOptions;
      if (multiselect) {
        if (currentSelectedOptions.includes(optionValue)) {
          newSelectedOptions = currentSelectedOptions.filter(
            (option) => option !== optionValue
          );
        } else {
          newSelectedOptions = [...currentSelectedOptions, optionValue];
        }
      } else {
        newSelectedOptions = [optionValue];
      }
      setCurrentSelectedOptions(newSelectedOptions);
      if (onSelectOption) {
        onSelectOption(newSelectedOptions);
      }
      if (newSelectedOptions.length <= 0) {
        setValidState("invalid");
      } else if (newSelectedOptions.length > 0) {
        setValidState("valid");
      }
    };

    const handleBlur = () => {
      if (currentSelectedOptions.length <= 0) {
        setValidState("invalid");
      } else if (currentSelectedOptions.length > 0) {
        setValidState("valid");
      }
    };

    const handleClearAll = () => {
      setCurrentSelectedOptions([]);
      setValidState("invalid");
      if (onSelectOption) {
        onSelectOption([]);
      }
    };

    const renderButtonContent = () => {
      const hasSelectedOptions = currentSelectedOptions.length > 0;

      return (
        <div className={styles.selectedOption}>
          {multiselect && hasSelectedOptions ? (
            <div className={styles.selectedOption}>
              {currentSelectedOptions.map((option) => (
                <div className={styles.optionLabel} key={option}>
                  {option}
                  <div
                    className={styles.crossButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      const updatedOptions = currentSelectedOptions.filter(
                        (item) => item !== option
                      );
                      setCurrentSelectedOptions(updatedOptions);
                      if (onSelectOption) {
                        onSelectOption(updatedOptions);
                      }
                    }}
                  >
                    X
                  </div>
                </div>
              ))}
              <Button 
                appearance="transparent" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearAll();
                }}
                // className={styles.clearAllButton}
              >
                Clear All
              </Button>
            </div>
          ) : (
            <div>{placeholder}</div>
          )}
        </div>
      );
    };

    useEffect(() => {
      if (zvalidState) setValidState(zvalidState);
    }, [zvalidState]);

    return (
      <Field label={props.zlabel}>
        <Dropdown
          onBlur={handleBlur}
          onOpenChange={handleOpenChange}
          listbox={{
            className: mergeClasses(
              styles.listboxContainer,
              zoptions.length > 4 ? styles.listbox : ""
            ),
            style: {
              border:
                validState === "none"
                  ? ""
                  : validState === "valid"
                  ? `1px solid ${colorSchema.types.primary1}`
                  : `1px solid ${colorSchema.errorsAndStatus.error}`,
            },
          }}
          className={mergeClasses(styles.dropdown, className)}
          style={{
            ...(zrequired && {
              border:
                validState === "none"
                  ? ""
                  : validState === "valid"
                  ? `1px solid ${colorSchema.types.primary1}`
                  : `1px solid ${colorSchema.errorsAndStatus.error}`,
            }),
          }}
          expandIcon={
            isOpen ? (
              <CaretDownFilled color="black" />
            ) : (
              <CaretUpFilled color="black" />
            )
          }
          aria-labelledby={"dropdown"}
          placeholder={placeholder}
          multiselect={multiselect || false}
          onOptionSelect={(event, data) =>
            handleSelectOption(event, data.optionValue)
          }
          selectedOptions={currentSelectedOptions}
          button={renderButtonContent()}
          ref={ref}
          {...rest}
          positioning={{ position: "below", offset: { crossAxis, mainAxis } }}
        >
          <div className={mergeClasses(styles.border)}>
            {zoptions.map((option, index) => (
              <React.Fragment key={index}>
                <Option
                  {...(multiselect && {
                    checkIcon: {
                      className: mergeClasses(
                        styles.option,
                        currentSelectedOptions.includes(option)
                          ? styles.checked
                          : ""
                      ),
                    },
                  })}
                  className={mergeClasses(styles.option)}
                  value={option}
                >
                  {option}
                </Option>
                {index < zoptions.length - 1 && (
                  <Divider className={styles.sidemargin} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Dropdown>
        {validState === "invalid" && (
          <div className={styles.errorMessage}>Required</div>
        )}
      </Field>
    );
  }
);
