import React, { Component } from 'react';
import './App.css';
import Counter from './counter/counter';

class App extends Component {
  constructor(props){
    super(props)
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
      <div>
        <p className="click-type">子组件点了{this.state.btnType}号</p>
        <Counter name="yang" selectType={this.selectType.bind(this)}/>
      </div>
    );
  }
}

export default App;
