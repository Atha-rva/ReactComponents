import { Button, mergeClasses } from "@fluentui/react-components";
import { useStyles } from "./ZButtonsStyle";
import { forwardRef, useState } from "react";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
import { zButtonProps } from "./Props";
import { Lato } from "../../assets/desginPattern/font/fontFamily/golbalFontFamily";
// import { valid } from "../../assets/Images/Images";
const ZPrimaryButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    Lato();
    const { disabled, className, ...rest } = props;

    return (
      <Button
        className={mergeClasses(styles.primary, className, "r1alrhcs")}
        disabled={disabled}
        {...rest}
        ref={ref}
        style={
          disabled
            ? {
                backgroundColor: "#D4F4EA",
                pointerEvents: "none",
              }
            : {}
        }
      />
    );
  }
);

const ZSecondaryButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, ...rest } = props;

    return (
      <Button
        className={mergeClasses(styles.secondary, className, "r1alrhcs")}
        disabled={disabled}
        {...rest}
        ref={ref}
        style={
          disabled
            ? {
                backgroundColor: "#D1D1D1",
                color: colorSchema.grays.defaultBackground,
                border: "none",
                pointerEvents: "none",
              }
            : {}
        }
      />
    );
  }
);

const ZborderButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, ...rest } = props;

    return (
      <Button
        className={mergeClasses(styles.borderButton, className, "r1alrhcs")}
        disabled={disabled}
        {...rest}
        ref={ref}
        style={
          disabled
            ? {
                backgroundColor: "#D1D1D1",
                color: colorSchema.grays.defaultBackground,
                border: "none",
                pointerEvents: "none",
              }
            : {}
        }
      />
    );
  }
);

const ZDefaultButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, ...rest } = props;

    return (
      <Button
        className={mergeClasses(styles.default, className)}
        disabled={disabled}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : {}
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZTransperantButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();

    const { disabled, className, ...rest } = props;

    return (
      <Button
        appearance="transparent"
        className={mergeClasses(
          styles.transparentButton,
          className,
          "r1alrhcs"
        )}
        disabled={disabled}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : {}
        }
        {...rest}
        ref={ref}
      />
    );
  }
);

const ZcolorHoldButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, onClick, ...rest } = props;
    const [buttonStyle, setButtonStyle] = useState({});

    const setStyle = () => {
      setButtonStyle({
        backgroundColor:  `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
        backgroundImage: `linear-gradient(96deg, ${colorSchema.gradient.teaserModeLeft} , ${colorSchema.gradient.teaserModeRight} )`,
        // color: colorSchema.colorButton,
      });

    };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : { ...buttonStyle }
        }
        className={mergeClasses(styles.colorHold, className)}
        {...rest}
        onClick={setStyle}
      />
    );
  }
);

const ZColorButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, onClick, ...rest } = props;
    const [buttonStyle, setButtonStyle] = useState({});

    const setStyle = () => {
      setButtonStyle({
        // backgroundColor: colorSchema.buttonHoldBackgroundColor,
        // backgroundImage: colorSchema.backgroundGradientSecondaryButton,
        color: colorSchema.colorButton,
      });
      if (onClick) {
        onClick();
      }
    };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : { ...buttonStyle }
        }
        className={mergeClasses(styles.linearColor, className)}
        {...rest}
        onClick={setStyle}
      />
    );
  }
);

const ZBorderColorButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, onClick, ...rest } = props;
    const [buttonStyle, setButtonStyle] = useState({});

    const setStyle = () => {
      setButtonStyle({
        backgroundColor: colorSchema.buttonHoldBackgroundColor,
        // backgroundImage: colorSchema.backgroundGradientSecondaryButton,
        color: colorSchema.colorButton,
      });
      if (onClick) {
        onClick();
      }
    };

    return (
      <Button
        disabled={disabled}
        ref={ref}
        style={
          disabled
            ? {
                pointerEvents: "none",
              }
            : { ...buttonStyle }
        }
        className={mergeClasses(styles.borderColor, className)}
        {...rest}
        onClick={setStyle}
      />
    );
  }
);

const ZEyeButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ ...props }, ref) => {
    const styles = useStyles();
    const { disabled, className, children, ...rest } = props;
    // const children : React.ReactElement = props,children;
    return (
      <Button
        className={mergeClasses(styles.eyeButton, className, "r1alrhcs")}
        disabled={disabled}
        {...rest}
        ref={ref}
        children={
          <>
            {/* <img src={valid} /> */}
            {children}
          </>
        }
        style={
          disabled
            ? {
                backgroundColor: "#D1D1D1",
                // color: colorSchema.grays.defaultBackground,
                border: "none",
                pointerEvents: "none",
                // gap: "5rem",
              }
            : {}
        }
      />
    );
  }
);

const ZButton = forwardRef<HTMLButtonElement, zButtonProps>(
  ({ variant = "default", ...props }, ref) => {
    switch (variant) {
      case "primary":
        return <ZPrimaryButton {...props} ref={ref} />;
      case "transparent":
        return <ZTransperantButton {...props} ref={ref} />;
      case "secondary":
        return <ZSecondaryButton {...props} ref={ref} />;
      case "secondaryBorder":
        return <ZborderButton {...props} ref={ref} />;
      case "colorHold":
        return <ZcolorHoldButton {...props} ref={ref} />;
      case "linearGradiant":
        return <ZColorButton {...props} ref={ref} />;
      case "borderColor":
        return <ZBorderColorButton {...props} ref={ref} />;
      case "eyeButton":
        return <ZEyeButton {...props} ref={ref} />;
      case "default":
      default:
        return <ZDefaultButton {...props} ref={ref} />;
    }
  }
);

export { ZButton };
