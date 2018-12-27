import React, { Component } from 'react';
import './App.css';
import Counter from './counter/counter';
import Lifecycle from './lifecycle/lifecycle';

class App extends Component {
  onClick() {
    this.setState({
      hasChild: false
    })
  }
  callSon(){
    this.setState({
      word: '你还好吧'
    })
  }
  constructor() {
    super()
    this.state = {
      hasChild: true
    }
  }

  render() {
    return (
      <div className="parent">
        <button onClick={() => this.onClick()}>kill son</button>
        <button onClick={()=>this.callSon()}>call son</button>
        {this.state.hasChild ? <Lifecycle word={this.state.word} /> : null}
      </div>
    );
  }
}

export default App;
