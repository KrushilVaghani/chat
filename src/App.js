import React from 'react';
import './App.css';
import Nav from './Component/Nav';
import Chatbody from './Component/Chat-body/Chatbody';
// import Chatlist from './Component/Chatlist/Chatlist';
import Chatlistitems from "./Component/Chatlist/Chatlistitems"

function App() {
  return (
    <div className="main">
      <Nav />
      <Chatbody />
      {/* <Chatlist/>  */}
      <Chatlistitems/>
    </div>
  );
}

export default App;
