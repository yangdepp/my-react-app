import React, { Component } from 'react';
import './App.css';
import Counter from './counter/counter';

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
  // 不建议在render函数中做this转换
  // 建议在constructor中做，this.handleClick = this.handleClick.bind(this)
  render() {
    return (
      <div className="parent">
        <p className="click-type">点了子组件的<span className="type">{this.state.btnType}</span>号</p>
        <Counter name="App" selectType={this.selectType.bind(this)}/>
      </div>
    );
  }
}

export default App;
