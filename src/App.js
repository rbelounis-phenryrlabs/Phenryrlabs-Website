import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey this is our new website for <a href="phenryrlabs.com">phenrylabs</a>, welcome !
        </p>
        <small>(And you can see this is the boilerplate for React)</small>
      </header>
    </div>
  );
}

export default App;
