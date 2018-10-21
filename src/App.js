import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            编辑 <code>src/App.js</code> 文件重载看效果。
          </p>
          <p>这是我的第一个React App</p>
          <p>Have Fun</p>
        </header>
      </div>
    );
  }
}

export default App;
