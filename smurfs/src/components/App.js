import React, { Component } from "react";
import "./App.css";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";
function App (){
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsForm/>
        <SmurfsList/>
      </div>
    );
  }


export default App;
