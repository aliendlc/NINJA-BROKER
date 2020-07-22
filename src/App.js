import React, {useContext} from 'react';
import {firebaseAuth} from './provider/AuthProvider'

import './App.css';

function App() {
  const {test} = useContext(firebaseAuth)
  console.log(test)
  return (
    <div className="App">
      <header className="App-header">
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
        </a>
      </header>
    </div>
  );
}

export default App;
