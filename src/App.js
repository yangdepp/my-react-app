import React, { Component } from 'react';
import './App.css';
import Counter from './counter/counter';
import Lifecycle from './lifecycle/lifecycle';

class App extends Component {
  constructor(){
    super()
    this.state = {
      btnType: '?'
    }
  }
  selectType(type){
    if(type === 1){
      this.setState({
        btnType: '加'
      })
    }else{
      this.setState({
        btnType: '减'
      })
    }
  }
  render() {
    return (
      <div className="parent">
        <p className="click-type">点了子组件的<span className="type">{this.state.btnType}</span>号</p>
        {/* <Counter name="App" selectType={this.selectType.bind(this)}/> */}
        <Lifecycle />
      </div>
    );
  }
}

export default App;
