import React, { useState, useRef, useEffect } from "react";
import { Input } from "@fluentui/react-components";
import { useStyles } from "./ZInputValidationstyle";
import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";

interface OtpSectionProps {
  length: number;
  onOtpChange?: (otp: string[]) => void;
  autosave?: (otp: string[]) => void;
  state: "none" | "valid" | "invalid";
  validationMsg: string;
}

const ZOtpInput: React.FC<OtpSectionProps> = ({
  length,
  onOtpChange,
  autosave,
  state,
  validationMsg,
}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const classes = useStyles();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (value.length > 1 || isNaN(Number(value))) return; // Only allow single numbers

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (onOtpChange) {
      onOtpChange(newOtp);
    }

    if (value.length === 1 && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !inputRefs.current[index]?.value &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const otpArray = paste.split("").slice(0, length);

    otpArray.forEach((val, i) => {
      // Use optional chaining to safely handle potential null values
      inputRefs.current[i]?.setAttribute("value", val);
    });

    setOtp(otpArray);

    if (onOtpChange) {
      onOtpChange(otpArray);
    }
  };

  useEffect(() => {
    if (autosave) {
      autosave(otp);
    }
  }, [otp, autosave]);

  return (
    <div className={classes.otpInputs}>
      <div className={classes.otp}>
        {Array.from({ length }).map((_, index) => (
          <Input
            key={index}
            type="text"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (inputRefs.current[index] = el)}
            className={classes.inputboxContainer}
            style={{
              borderColor:
                state === "invalid"
                  ? colorSchema.errorsAndStatus.error
                  : state === "valid"
                  ? colorSchema.errorsAndStatus.success
                  : colorSchema.grays.defaultBorder,
            }}
          />
        ))}
      </div>
      {state === "invalid" && (
        <div>
          <span
            className={classes.errorMsg}
            style={{
              color: colorSchema.errorsAndStatus.error,
            }}
          >
            {validationMsg}
          </span>
        </div>
      )}
    </div>
  );
};

export { ZOtpInput };



















// import React, { useState, useRef, useEffect } from "react";
// import { Input, mergeClasses } from "@fluentui/react-components";
// import { useStyles } from "./ZInputValidationstyle";
// import { colorSchema } from "../../assets/desginPattern/colors/colorsSchema";
// import { OtpSectionProps } from "./Props";
 
// const ZOtpInput: React.FC<OtpSectionProps> = ({
//   length,
//   onOtpChange,
//   autosave,
//   state,
//   validationMsg,
//   isVisible = true,
//   disabled = false,
// }) => {
//   const [otp, setOtp] = useState(Array(length).fill(""));
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
//   const styles = useStyles();
 
//   const handleChange = (
//     element: React.ChangeEvent<HTMLInputElement>,
//     index: number
//   ) => {
//     const value = element.target.value;
//     if (isNaN(Number(value))) return;
//     let newOtp = [...otp];
//     newOtp[index] = value.slice(-1);
//     setOtp(newOtp);
 
//     if (onOtpChange) {
//       onOtpChange(newOtp);
//     }
 
//     if (
//       element.nativeEvent instanceof InputEvent &&
//       element.nativeEvent.inputType === "deleteContentBackward"
//     ) {
//       inputRefs.current[index - 1]?.focus();
//     }
 
//     if (value && index < otp.length - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };
 
//   useEffect(() => {
//     if (autosave) {
//       autosave(otp);
//     }
//   }, [otp, autosave]);
 
//   return (
//     <div
//       className={mergeClasses(
//         styles.otpInputs,
//         !isVisible && styles.invisible,
//         disabled && styles.disabled
//       )}
//     >
//       <div className={styles.otp}>
//         {otp.map((data, index) => (
//           <Input
//             key={index}
//             type="text"
//             value={data}
//             onChange={(e) => handleChange(e, index)}
//             ref={(el) => (inputRefs.current[index] = el)}
//             className={styles.inputboxContainer}
//             style={{
//               borderColor:
//                 state === "invalid"
//                   ? colorSchema.errorsAndStatus.error
//                   : state === "valid"
//                   ? colorSchema.errorsAndStatus.success
//                   : colorSchema.grays.defaultBorder,
//             }}
//           />
//         ))}
//       </div>
//       {state === "invalid" && (
//         <div>
//           <span
//             className={styles.errorMsg}
//             style={{
//               color:
//                 state === "invalid" ? colorSchema.errorsAndStatus.error : "",
//             }}
//           >
//             {validationMsg}
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };
 
// export { ZOtpInput };