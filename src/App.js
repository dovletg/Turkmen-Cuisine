import logo from './images.jpeg';
import './App.css';
import Login from './components/Login';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username:'',
      password:'',
      loggedIn:false
    };
    this.usercheck = this.usercheck.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  usercheck() {
    if(this.state.username==="abc" && this.state.password==="123"){
      this.setState({
        loggedIn:true
      })
    }else{
      alert('Username and Password doesn\'t match');
    }
  }

  setUserName(UserName) {
    this.setState({
      username:UserName
    })
  }

  setPassword(UserPassword) {
    this.setState({
      password: UserPassword
    })
  }

  render(){

    let currComponent = <div></div>;
    if(this.state.loggedIn) {
      currComponent = <h1>You are successfully logged in</h1>
    } else {
      currComponent = <Login userName={this.setUserName} UserPassword={this.setPassword} checkUser={this.usercheck}/>
    }
  
    return (
    <div className="App">
      <img src={logo} alt="bereketli Turkmen" id="logo" />
      <hr></hr>
      {currComponent}
    </div>
   );
 }
} 

export default App;
