import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <EventBind /> */}
      {/* <Counter /> */}
      <ClassClick />
      <FunctionClick />
      {/* <Message/>
      <Greet name="Gayathri" mothername="Wasanthi"> 
        <p>This is a children prop</p>
      </Greet>
      <Greet name="Tharushi" mothername="Wasanthi">
        <button>Action</button>
      </Greet>
      <Greet name="Sanduni" mothername="Kumari"/>
      <Welcome name="Gayathri"/>
      <Hello/> */}
    </div>
  );
}

export default App;
