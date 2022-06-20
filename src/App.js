import logo from './logo.svg';
import './App.css';
import Home from './page/home';

function App() {
  return (
    <div>
        {/* <img src={logo}/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React _ 
          こんばんは！ドタンタンです。美人は誰でしょか
        </a>
        <Home/>
        <p style={{position: "absolute"}}> こんばんは！ドタンタンです。美人は誰でしょか</p>
        <p> toi la tan dep trai la la</p>
    </div>
  );
}

export default App;
