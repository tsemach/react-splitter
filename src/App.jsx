import React from 'react';

import Header from "./components/Header";
import Sidebar from './components/Sidebar';

import './App.scss';

function App() {
  return (
    <div className="App">      
      <Header/>  
      <div className="sidebar-and_main">
        <Sidebar/>     
      </div>
    </div>
  );
}

export default App;
