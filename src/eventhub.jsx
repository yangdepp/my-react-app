import React from 'react';
import './eventhub.css'

var money = {
  amount: 100000
}

var fnLists = {};

var eventHub = {
  // 发布事件
  trigger(eventName, data) {
    let fnList = fnLists[eventName]
    if (!fnList) { return }
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
  },
  //订阅事件
  on(eventName, fn) {
    if (!fnLists[eventName]) {
      fnLists[eventName] = []
    }
    fnLists[eventName].push(fn)
  }
}

//创建管家
var x = {
  init() {
    eventHub.on('我想花钱', function (data) {
      console.log('1111')
      money.amount -= data
      // 此时我不知道重新render，所以无法在视图上更新
      console.log(money)
    })
  }
}
x.init()



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render() {
    return (
      <div className="root">
        <BigPapa money={this.state.money} />
        <YoungPapa money={this.state.money} />
      </div>
    )
  }
}

class BigPapa extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="papa">
        大爸-{this.props.money.amount}
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
      </div>
    )
  }
}

class YoungPapa extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="papa">
        二爸-{this.props.money.amount}
        <Son3 money={this.props.money} />
        <Son4 money={this.props.money} />
      </div>
    )
  }
}

class Son1 extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子1-{this.props.money.amount}</div>
    )
  }
}

class Son2 extends React.Component {
  constructor() {
    super()
  }
  x() {
    eventHub.trigger('我想花钱', 100)
  }
  render() {
    return (
      <div className="son">儿子2-{this.props.money.amount}
        <button onClick={this.x.bind(this)}>消费</button>
      </div>
    )
  }
}

class Son3 extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子3-{this.props.money.amount}</div>
    )
  }
}

class Son4 extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="son">儿子4-{this.props.money.amount}</div>
    )
  }
}


export default App