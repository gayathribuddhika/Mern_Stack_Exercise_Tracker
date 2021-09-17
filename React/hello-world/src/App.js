// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Gayathri" mothername="Wasanthi"> 
        <p>This is a children prop</p>
      </Greet>
      <Greet name="Tharushi" mothername="Wasanthi">
        <button>Action</button>
      </Greet>
      <Greet name="Sanduni" mothername="Kumari"/>
      <Welcome name="Gayathri"/>
      <Hello/>
    </div>
  );
}

export default App;
