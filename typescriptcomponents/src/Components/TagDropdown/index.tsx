import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import {
  Divider,
  Dropdown,
  Field,
  Option,
  mergeClasses,
  useId,
} from "@fluentui/react-components";
import { CaretDownFilled, CaretUpFilled } from "@fluentui/react-icons";
import { dropdowntype } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";

export const ZTagDropdown = React.forwardRef<HTMLButtonElement, dropdowntype>(
  (props, ref) => {
    Lato();
    const [validState, setValidState] = useState<"none" | "valid" | "invalid">(
      "none"
    );
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const [crossAxis] = React.useState(0);
    const [mainAxis] = React.useState(5);
    const dropdownId = useId("dropdown");
    const { zvalidState, zoptions, zrequired, className, ...rest } = props;
    const styles = useStyles();

    const [isOpen, setIsOpen] = useState(true);

    const handleOpenChange = (ev: any, data: { open?: boolean }) => {
      setIsOpen(!data.open);
    };

    useEffect(() => {
      if (zvalidState) setValidState(zvalidState);
    }, [zvalidState]);

    const renderSelectedOptions = () => {
      return selectedOptions.map((option, index) => (
        <span key={index} className={styles.selectedOption}>
          {option}
          {index < selectedOptions.length - 1 && <span>, </span>}
        </span>
      ));
    };

    return (
      <Field label={props.zlabel}>
        <Dropdown
          onOpenChange={handleOpenChange}
          onOptionSelect={(e, option) => {
            setSelectedOptions(option.selectedOptions);
          }}
          listbox={{
            className: mergeClasses(
              styles.listboxContainer,
              zoptions.length > 4 ? styles.listbox : ""
            ),
          }}
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
          aria-labelledby={dropdownId}
          placeholder={props.placeholder}
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
                  checkIcon={{
                    className: mergeClasses(
                      styles.option,
                      selectedOptions.includes(option)
                        ? styles.checked
                        : styles.unchecked
                    ),
                  }}
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
        <div className={styles.selectedOptionsContainer}>
          {renderSelectedOptions()}
        </div>
        {validState === "invalid" && <div>Required</div>}
      </Field>
    );
  }
);
