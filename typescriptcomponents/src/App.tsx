import React from "react";
import { FormRenderer } from "./JSONFormat/FormRenderer";

const jsonTemplate = {
  uilayout: {
    elements: [
      {
        id: "section1",
        layout: "grid",
        elements: [
          {
            id: "radioBtn1",
            control: "zRadioBtn",
            label: "Select an Option",
            options: ["Option 1", "Option 2", "Option 3"],
            className: "radio-btn-container",
            Radioclass: "radio-btn",
            RadioGroupclass: "radio-group",
            events: [{ onChange: true }, { onBlur: true }],
            spanColunmns: 1,
          },
        ],
      },
    ],
  },
};

const App = () => {
  return (
    <div>
      <h1>Form Renderer POC</h1>
      <FormRenderer template={jsonTemplate} />
    </div>
  );
};

export default App;
