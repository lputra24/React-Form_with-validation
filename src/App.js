import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from'./Form/Form.js'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sign Up
        </p>
        <Form/>
      </header>
    </div>
  );
}

export default App;
