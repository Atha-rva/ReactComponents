// import * as React from "react";
// import {
//   Field,
//   makeStaticStyles,
//   Radio,
//   RadioGroup,
// } from "@fluentui/react-components";

// const useStaticStyles = makeStaticStyles({
//   ".rg1upok:enabled:checked ~ .fui-Radio__indicator": {
//     borderColor: "black",
//     color: "black",
//     width: "30px",
//     height: "30px",
//   },
//   ".rg1upok:enabled:checked:hover ~ .fui-Radio__indicator": {
//     borderColor: "black",
//     color: "black",
//   },
//   ".rg1upok:enabled:not(:checked) ~ .fui-Radio__indicator": {
//     width: "30px",
//     height: "30px",
//   },
//   ".rwtekvw::after": {
//     width: "35px",
//     height: "35px",
//   },
//   ".rg1upok:disabled ~ .fui-Radio__indicator": {
//     width: "30px",
//     height: "30px",
//   },
// });

// interface RadioProps {
//   ZGlobalLabel: string;
//   Zlabel: string[];
//   Zhide?: boolean;
//   className?: string;
//   Radioclass?: string;
//   RadioGroupclass?: string;
//   onValueChange?: (value: string) => void;
// }

// export const RadioBtn: React.FC<Partial<RadioProps>> = ({
//   ZGlobalLabel = "",
//   Zlabel = [],
//   Zhide = false,
//   className = "",
//   Radioclass = "",
//   RadioGroupclass = "",
//   onValueChange,
// }) => {
//   useStaticStyles();

//   const [selectedValue, setSelectedValue] = React.useState<string | undefined>(
//     undefined
//   );

//   const handleChange = (
//     event: React.FormEvent<HTMLDivElement>,
//     data: { value: string }
//   ) => {
//     setSelectedValue(data.value);
//     if (onValueChange) {
//       onValueChange(data.value);
//     }
//   };

//   if (Zhide) {
//     return null;
//   }

//   return (
//     <Field className={className}>
//       <label style={{ marginLeft: "10px" }}>{ZGlobalLabel}</label>
//       <RadioGroup
//         layout="horizontal"
//         className={RadioGroupclass}
//         onChange={handleChange}
//         value={selectedValue}
//       >
//         {Zlabel?.map((label, index) => (
//           <Radio
//             key={index}
//             label={label}
//             value={label}
//             className={Radioclass}
//           />
//         ))}
//       </RadioGroup>
//     </Field>
//   );
// };


import * as React from "react";
import {
  Field,
  makeStaticStyles,
  Radio,
  RadioGroup,
} from "@fluentui/react-components";

const useStaticStyles = makeStaticStyles({
  ".rg1upok:enabled:checked ~ .fui-Radio__indicator": {
    borderColor: "black",
    color: "black",
    width: "30px",
    height: "30px",
  },
  ".rg1upok:enabled:checked:hover ~ .fui-Radio__indicator": {
    borderColor: "black",
    color: "black",
  },
  ".rg1upok:enabled:not(:checked) ~ .fui-Radio__indicator": {
    width: "30px",
    height: "30px",
  },
  ".rwtekvw::after": {
    width: "35px",
    height: "35px",
  },
  ".rg1upok:disabled ~ .fui-Radio__indicator": {
    width: "30px",
    height: "30px",
  },
});

interface RadioProps {
  ZGlobalLabel: string;
  Zlabel: string[];
  Zhide?: boolean;
  className?: string;
  Radioclass?: string;
  RadioGroupclass?: string;
}

export const RadioBtn: React.FC<Partial<RadioProps>> = ({
  ZGlobalLabel = "",
  Zlabel = [],
  Zhide = false,
  className = "",
  Radioclass = "",
  RadioGroupclass = "",
}) => {
  useStaticStyles();

  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);

  const handleChange = (event: React.FormEvent<HTMLDivElement>, data: { value: string }) => {
    setSelectedValue(data.value);
    console.log("Selected Radio Value:", data.value);
  };

  if (Zhide) {
    return null;
  }

  return (
    <Field className={className}>
      <label style={{ marginLeft: "10px" }}>{ZGlobalLabel}</label>
      <RadioGroup
        layout="horizontal"
        className={RadioGroupclass}
        onChange={handleChange}
        value={selectedValue}
      >
        {Zlabel?.map((label, index) => (
          <Radio key={index} label={label} value={label} className={Radioclass} />
        ))}
      </RadioGroup>
    </Field>
  );
};
