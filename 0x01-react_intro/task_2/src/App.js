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
        <label className="email" htmlFor='email'>Email: </label>
        <input name='email' type='email' placeholder='Email' id='email'/>
        <label className='password' htmlFor='password'>Password</label>
        <input name='password' type='password' placeholder='Password' id='password'/>
        <button className='label-button'>OK</button>
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