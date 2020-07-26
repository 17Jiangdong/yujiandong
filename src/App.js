import React from 'react';
import doudou_image from './doudou_image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={doudou_image} className="App-logo" alt="logo" />
        <p>
          小猫猫和小狗狗.
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
