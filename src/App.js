import React, { Component } from 'react';
import './App.css';
// import Counter from './counter/counter';
import { connect } from 'react-redux';




class App extends Component {

  render() {
    return (
      <div className="parent">
        你点击了<span>{this.props.n}</span>次
          <div>
          <button id="add1" onClick={() => this.props.add1()}>+1</button>
          <button id="add2">+2</button>
          <button id="add1IfOdd">单数就+1</button>
          <button id="add1After2Sec">两秒钟后+1</button>
        </div>
      </div>
    );
  }
}

function mapStateToprops(state) {
  return {
    n: state.n
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 })
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(App)