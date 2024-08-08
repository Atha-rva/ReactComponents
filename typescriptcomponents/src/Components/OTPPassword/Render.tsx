import React, { useState } from 'react'
import { ZOtpInput } from './ZotpInput';

const OtpPassword = () => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill("")); // Initialize with the length of OTP
  const [state, setState] = useState<"none" | "valid" | "invalid">("none");
    const [validationMsg, setValidationMsg] = useState<string>("");
    
    const handleOtpChange = (newOtp: string[]) => {
        setOtp(newOtp);
        
        // Example validation logic
        if (newOtp.every(digit => digit.length === 1)) {
          setState("valid");
          setValidationMsg("");
        } else {
          setState("invalid");
          setValidationMsg("Please enter a valid OTP");
        }
      };
    
      const handleAutosave = (newOtp: string[]) => {
        console.log("Autosave OTP:", newOtp); // Handle autosave logic
      };
  return (
<div style={{ padding: "20px" }}>
      <h1>OTP Input Component</h1>
      <ZOtpInput
        length={4} // Length of the OTP
        onOtpChange={handleOtpChange}
        autosave={handleAutosave}
        state={state}
        validationMsg={validationMsg}
      />
    </div>
  )
}

export default OtpPassword
