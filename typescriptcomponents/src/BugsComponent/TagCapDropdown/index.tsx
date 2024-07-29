import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  Divider,
  Dropdown,
  Field,
  Option,
  mergeClasses,
} from "@fluentui/react-components";
import { CaretDownFilled, CaretUpFilled } from "@fluentui/react-icons";
import { dropdowntype } from "./ZDropdownProps";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

export const ZtagDropdown = React.forwardRef<HTMLButtonElement, dropdowntype>(
  (props, ref) => {
    Lato();

    const [validState, setValidState] = useState<"none" | "valid" | "invalid">(
      "none"
    );
    const [selectedOptions, setSelectedOption] = useState<string[]>([]);

    const [crossAxis] = React.useState(0);
    const [mainAxis] = React.useState(5);

    const {
      zvalidState,
      zoptions,
      zrequired,
      className,
      multiselect,
      placeholder,
      ...rest
    } = props;
    const styles = useStyles();

    const [isOpen, setIsOpen] = useState(true);

    const handleOpenChange = (ev: any, data: { open?: boolean }) => {
      setIsOpen(!data.open);
    };

    useEffect(() => {
      if (zvalidState) setValidState(zvalidState);
    }, [zvalidState]);

    const renderButtonContent = () => {
      if (multiselect) {
        return selectedOptions.length === 0 ? (
          <div>{placeholder}</div>
        ) : (
          <div className={styles.selectedOption}>
            {selectedOptions.map((option) => (
              <div className={styles.optionLabel} key={option}>
                {option}
                <div
                  className={styles.crossButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedOption((prev) => {
                      const copySelected = [...prev];
                      copySelected.splice(copySelected.indexOf(option), 1);
                      return copySelected;
                    });
                  }}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        );
      } else {
        return selectedOptions.length === 0 ? (
          <div>{placeholder}</div>
        ) : (
          <div>{selectedOptions[0]}</div>
        );
      }
    };

    return (
      <Field label={props.zlabel}>
        <Dropdown
          onOpenChange={handleOpenChange}
          onOptionSelect={(e, option) => {
            if (multiselect) {
              setSelectedOption(option.selectedOptions);
            } else {
              setSelectedOption([option.selectedOptions[0]]);
            }
          }}
          listbox={{
            className: mergeClasses(
              styles.listboxContainer,
              zoptions.length > 4 ? styles.listbox : ""
            ),
          }}
          selectedOptions={selectedOptions}
          className={mergeClasses(styles.dropdown, className)}
          style={{
            ...(zrequired && {
              border:
                validState === "none"
                  ? "none"
                  : validState === "valid"
                  ? `1px solid${colorSchema.types.primary1}`
                  : `1px solid${colorSchema.errorsAndStatus.error}`,
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
          button={renderButtonContent()}
          ref={ref}
          {...rest}
          positioning={{ position: "below", offset: { crossAxis, mainAxis } }}
        >
          <div
            className={mergeClasses(styles.border)}
            style={{
              ...(zrequired && {
                border:
                  validState === "none"
                    ? "none"
                    : validState === "valid"
                    ? `1px solid${colorSchema.types.primary1}`
                    : `1px solid${colorSchema.errorsAndStatus.error}`,
              }),
            }}
          >
            {zoptions.map((option, index) => (
              <React.Fragment key={index}>
                <Option
                  {...(multiselect && {
                    checkIcon: {
                      className: mergeClasses(
                        styles.option,
                        selectedOptions.includes(option)
                          ? styles.checked
                          : styles.unchecked
                      ),
                    },
                  })}
                  className={styles.option}
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
        {validState === "invalid" && <div>Required</div>}
      </Field>
    );
  }
);
