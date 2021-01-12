import logo from './images.jpeg';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="bereketli Turkmen" id="logo" />
      <hr></hr>
      <Login />
    </div>
  );
}

export default App;
