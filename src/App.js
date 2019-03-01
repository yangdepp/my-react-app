import React, { Component } from 'react';
import './App.css';
import XButton from './components/button.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <div className="App">
        <XButton value="涟漪按钮"></XButton>
      </div>
    );
  }
}

export default App;
