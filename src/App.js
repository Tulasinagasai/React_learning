import logo from './logo.svg';
import './App.css';
import Button from './components/buttons/button';
import '../src/components/buttons/button.scss';
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
           <Button text="click" bgColor="primary" btn_type="solid"/>
        <Button text="click" bgColor="secondary" btn_type="solid"/>
        <Button text="click" bgColor="white" btn_type="solid"/>
        <Button text="click" bgColor="black" btn_type="solid"/>

 <Button text="click" bgColor="primary" btn_type="outline"/>
        <Button text="click" bgColor="secondary" btn_type="outline"/>
        <Button text="click" bgColor="white" btn_type="outline"/>
        <Button text="click" bgColor="black" btn_type="outline"/>
      </header>
    </div>
  );
}

export default App;
