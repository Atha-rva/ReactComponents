import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { InputComponent } from './Components/Input';
// import { Appearance } from './Components/Button';
// import { SwitchLabel } from './Components/Switch';
// import ZRadio from './Components/Radio/index';
import { SwitchLabel } from './Components/Switch';
import { Appearance } from './Components/Button';
import { InputComponent } from './Components/Input';
// import ZRadio from './Components/Radio';
import { RadioBtn } from './Components/RadioButton';
import { useStyles } from './Components/style';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <InputComponent fieldName='Email*'/>
      <Appearance/>
      <SwitchLabel labels={["InputBox", "OutputBox"]} hideswitch={false} switchisabled={true} /> */}

      {/* <ZRadio ZradioLabel={'Atharv'} Zvalue={["Yes","No"]} Zdisabled={false} zhide={false}/> */}

      <RadioBtn ZGlobalLabel='Applicable Companies' Zlabel={["Yes", "No"]} Zhide={false} />
     
    </div>
  );
}

export default App;
