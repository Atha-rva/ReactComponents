import React from "react";
import { useStyles } from "./style";
import { ZTagPickerDropdown } from "./Components/NewTagDropdown";
import ZTextAreaDropdown from "./Components/TextArea";
import ZTextArea from "./Components/TextArea";
import { ZTagPickerContainer } from "./Components/TagpickerDropdown";
import ZSpinButton from "./Components/SpinButton";
import { ManufacturingTagPickerContainer } from "./Components/TagPickerComponentwithoutdropdowncheckbox";



const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ManufacturingTagPickerContainer className={""} fieldName={""} options={["ksd,f,sdfn,dsfs,dfjdsfdsfk,fsjf","ldjfksdfklsdfjkdslfjklsdfjklsd",'jkshfjkdshfjkdshfjkhfjksdfjk','kfhsdjkfhjksdfhjfjksdfkjsdfjksfjsf','bsdfbfshfhhsdfhsfbfsbnmvbvbhvhvh','sdfhjkhfsjkdfhjkshfsjkd']}/>
      {/* <ZSpinButton zlabel="Months" zmax={12} zmin={0}/> */}
    </div>
  );
};

export default App;
