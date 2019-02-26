import React from 'react';
import './App1.css';

function App () {
  return (
    <div>
      <div className="header">
        <Time1 />
        <Judge />
        <Time2 />
      </div>
      <Track1 />
      <Track2 />
    </div>
  )
}

function Time1 () {
  return (
    <div>
      <h2>兔子用时</h2>
      <div>0</div>
    </div>
  )
}

function Time2 () {
  return (
    <div>
      <h2>乌龟用时</h2>
      <div>0</div>
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
    setInterval(() => {
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
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
    setInterval(() => {
      n += 1
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
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