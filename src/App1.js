import React from 'react';
import './App1.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result1: 0,
      result2: 0,
    }
    this.t0 = new Date()
  }
  success1 () {
    console.log('兔子done,cost')
    let r1 = new Date() - this.t0
    this.setState({
      result1: r1
    })
  }
  success2 () {
    console.log('乌龟done,cost')
    let r2 = new Date() - this.t0
    this.setState({
      result2: r2
    })
  }


  render () {
    return (
      <div>
        <div className="header">
          <Time1 result={this.state.result1} />
          <Judge />
          <Time2 result={this.state.result2} />
        </div>
        <Track1 success={this.success1.bind(this)} />
        <Track2 success={this.success2.bind(this)} />
      </div>
    )
  }
}

function Time1 (props) {
  return (
    <div>
      <h2>兔子用时</h2>
      <div>{props.result}</div>
    </div>
  )
}

function Time2 (props) {
  return (
    <div>
      <h2>乌龟用时</h2>
      <div>{props.result}</div>
    </div>
  )
}

class Track1 extends React.Component {
  constructor() {
    super();
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        this.props.success()
      }
    }, 1000)
  }
  render () {
    return (
      <div>
        <div className="play" style={this.state.style}>兔子</div>
        <div className="track"></div>
      </div>
    )
  }
}

class Track2 extends React.Component {
  constructor() {
    super();
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(() => {
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        this.props.success()
      }
    }, 1000)
  }
  render () {
    return (
      <div>
        <div className="play" style={this.state.style}>乌龟</div>
        <div className="track"></div>
      </div>
    )
  }
}

function Judge () {
  return (
    <div>裁判</div>
  )
}


export default App