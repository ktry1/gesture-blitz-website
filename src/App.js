import logo from './logo.svg';
import './App.css';
import React from "react";
import About from './pages/About';
import Download from './pages/Download';
import Support from './pages/Support';


import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/download" element={<Download />}/>
        <Route path="/support" element={<Support />}/>
      </Routes>
     
    </div>
  );
}

export default App;
