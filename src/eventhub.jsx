import React from 'react';
import './eventhub.css'

var money = {
  amount: 100000
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="root">
        <BigPapa />
        <YoungPapa />
      </div>
    )
  }
}

class BigPapa extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="papa">
        大爸-{this.state.money.amount}
        <Son1 />
        <Son2 />
      </div>
    )
  }
}

class YoungPapa extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="papa">
        二爸-{this.state.money.amount}
        <Son3 />
        <Son4 />
      </div>
    )
  }
}

class Son1 extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="son">儿子1-{this.state.money.amount}</div>
    )
  }
}

class Son2 extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  x(){
    money.amount -= 10
    this.setState({
      money: money
    })
  }
  render () {
    return (
      <div className="son">儿子2-{this.state.money.amount}
        <button onClick={this.x.bind(this)}>消费</button>
      </div>
    )
  }
}

class Son3 extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="son">儿子3-{this.state.money.amount}</div>
    )
  }
}

class Son4 extends React.Component {
  constructor() {
    super()
    this.state = {
      money: money
    }
  }
  render () {
    return (
      <div className="son">儿子4-{this.state.money.amount}</div>
    )
  }
}


export default App