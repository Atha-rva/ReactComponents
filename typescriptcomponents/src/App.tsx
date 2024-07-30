import React from "react";
import { ManufacturingTagPickerContainer } from "./Components/TagPickerComponentwithoutdropdowncheckbox";
import { RadioBtn } from "./Components/RadioButton";



const App = () => {
  // const classes = useStyles();
  return (
    <div>
      {/* <ManufacturingTagPickerContainer className={""} fieldName={""} options={["ksd,f,sdfn,dsfs,dfjdsfdsfk,fsjf","ldjfksdfklsdfjkdslfjklsdfjklsd",'jkshfjkdshfjkdshfjkhfjksdfjk','kfhsdjkfhjksdfhjfjksdfkjsdfjksfjsf','bsdfbfshfhhsdfhsfbfsbnmvbvbhvhvh','sdfhjkhfsjkdfhjkshfsjkd']}/> */}
      <RadioBtn Zlabel={["Yes","No"]} ZGlobalLabel="Compaines"/>
    </div>
  );
};

export default App;
