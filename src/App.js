import React from 'react'
import "./App.css";
import PhotoList from './PhotoList';


function App() {
  return (
  <div className='App'>
    <div className='App-header'>
      <img className='App-logo' src='https://lh3.googleusercontent.com/proxy/F-oEyjySNtDZDuKl7Ue-X-c-ECSieBL97odQtB4_c9PUR612-LWhwqTBUQXiM4QxbSauDE9bsOMdXMNSwJn6K3qFRHcpkhz72nNb_x463n2p2ybusyeSrzV-EFI' alt='Pink and blue NASA logo'></img>
      <PhotoList/>
    </div>
  </div>
  );
}

export default App;
