import React, { useEffect, useState } from "react";
import { useStyles } from "./ZTagPickerDropdownStyle";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  Divider,
  Dropdown,
  Field,
  Option,
  mergeClasses,
} from "@fluentui/react-components";
import {
  CaretDownFilled,
  CaretUpFilled,
  DismissCircleFilled,
} from "@fluentui/react-icons";
import { dropdowntype } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

export const ZTagPickerDropdown = React.forwardRef<
  HTMLButtonElement,
  dropdowntype
>((props, ref) => {
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
    multiselect = true,
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

  useEffect(() => {
    console.log("Selected options:", selectedOptions);
  }, [selectedOptions]);

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption([]);
  };

  const getDynamicHeight = () => {
    const baseHeight = 50;
    const optionHeight = 8;
    return baseHeight + Math.min(selectedOptions.length, 10) * optionHeight;
  };

  const renderButtonContent = () => {
    return (
      <div className={styles.ZTagInput}
      >
        {selectedOptions.length === 0 ? (
          <div>{placeholder}</div>
        ) : (
          <div
            className={styles.selectedOptionsContainer}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "5px",
              overflow: "hidden",
              flexGrow: 1,
            }}
          >
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
        )}
        {multiselect && selectedOptions.length > 0 && (
          <div onClick={handleClearAll} className={styles.clearAllButton}>
            <DismissCircleFilled style={{ width: "22px", height: "22px" }} />
          </div>
        )}
      </div>
    );
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
        className={mergeClasses(styles.Tagdropdown, className)}
        style={{
          height: getDynamicHeight(),
          ...(zrequired && {
            border:
              validState === "none"
                ? "none"
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
                  ? `1px solid ${colorSchema.types.primary1}`
                  : `1px solid ${colorSchema.errorsAndStatus.error}`,
            }),
          }}
        >
          {zoptions.map((option, index) => (
            <React.Fragment key={index}>
              <Option
                {...(multiselect && {
                  checkIcon: {
                    className: mergeClasses(
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
});
