import logo from './images.jpeg';
import './App.css';
import Login from './components/Login';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <img src={logo} alt="bereketli Turkmen" id="logo" />
      <hr></hr>
      <Login />
    </div>
   );
 }
} 

export default App;
