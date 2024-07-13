import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { InputComponent } from './Components/Input';
// import { Appearance } from './Components/Button';
// import { SwitchLabel } from './Components/Switch';
import ZRadio from './Components/Radio/index';
import { SwitchLabel } from './Components/Switch';
import { Appearance } from './Components/Button';
import { InputComponent } from './Components/Input';


function App() {
  return (
    <div className="App">
      <InputComponent fieldName='Email*'/>
      <Appearance/>
      <SwitchLabel labels={["InputBox", "OutputBox"]} hideswitch={false} switchisabled={true} />

      {/* <ZRadio ZradioLabel={'Atharv'} Zvalue={["Yes","No"]} Zdisabled={false} zhide={false}/> */}
     
    </div>
  );
}

export default App;
