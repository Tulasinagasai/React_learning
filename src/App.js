import logo from './logo.svg';
import './App.css';
import Form from './components/form/Form';
import Hoc from './components/Hoc/Hoc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <h1> Welcome user !!</h1>
     <Form/>
    <Hoc/>
      </header>
    </div>
  );
}

export default Hoc(App);
