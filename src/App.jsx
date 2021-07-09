
import './App.css';
import axios from "axios";
import { useState } from 'react';
import List from "./components/List"
import Input from './components/Input';

function App() {


  return (
    <div className="App">
     <List/>

     <Input/>
    </div>
  );
}

export default App;
