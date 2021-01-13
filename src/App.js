import logo from './images.jpeg';
import './App.css';
import Login from './components/Login';
import React from 'react';
import Order from './components/Order';
import Summary from './components/Summary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username:'',
      password:'',
      patty:'',
      amount:'',
      doneness:'',
      topping:'',
      cheese:'',
      bun:'',
      sauce:'',
      extra:'',
      loggedIn:false
    };
    this.usercheck = this.usercheck.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setInput = this.setInput.bind(this);
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

  setInput(property, value) {
    this.setState({
      [property]: value
    })
  }

  render(){
    console.log(this.state);

    let currComponent;  //= <div></div>;
    if(this.state.loggedIn) {
      currComponent = <Order inputFunction={this.setInput}/>
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
