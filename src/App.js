import logo from './logo.svg';
import './App.css';
import './components/Message';
import Message from './components/Message';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Message name="Sudhir Padhy 12212"/>
      <Greet name="Hello X" hero="XY"> <p>"Hello Sudhir"</p> </Greet>
      
    </div>
  );
}

export default App;


// Props are immutable / their value can not be changed