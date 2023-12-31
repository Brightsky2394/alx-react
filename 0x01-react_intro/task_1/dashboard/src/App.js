import logo from './holberton-logo.jpg';
import {getFullYear, getFooterCopy} from './utils.js';
import {Notifications} from './Notifications.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="root-notifications">
        <Notifications/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> School dashboard</h1>
      </header>
      <body className="App-body">
        <p>
          Login to access the full dashboard
        </p>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;