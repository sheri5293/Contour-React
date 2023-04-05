import './App.css';
import './App.js';
import { useEffect, useState} from "react";
import Apod from "./nasa/apod";
import Comeback from "./nasa/Comeback";
import AgeConverter from './nasa/AgeConverter';

function App({ name = "Sheheryar" }) {


 
  return (
    <div className="App">
       <AgeConverter />
      
    </div>
  );
}

export default App;
