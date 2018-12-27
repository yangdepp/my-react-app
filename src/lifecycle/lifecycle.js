import React, { Component } from 'react';

let div = document.createElement('div');
div.className = 'log-content'
document.body.appendChild(div)
console.log = function (content) {
  div.innerHTML += `${content}<br>`
}


class lifeCycle extends Component {
  onClick() {
    console.log('用户点击了')
    this.setState({
      n: this.state.n += 1
    })
  }

  // 1、不能在mount之前setState
  // 2、不能在render()中setState
  // 3、不能在componentWillUpdate中setState，原因同2
  // 4、也不能在componentDidUpdate中setState，原因同2
  // 因为setState会触发render更新，所以未挂载之前不能，render()中也不行，否则会循环更新


  constructor() {
    super();
    this.state = {
      n: 0
    }
    console.log('1.创建lifecycle组件')
    this.state = {
      n: 0,
    }
  }
  componentWillMount() {
    // console.log(this.state)  // 如果在此处第一次初始化state，则state是null
    console.log('2.mount之前挂载lifecycle组件')
  }

  render() {
    console.log('3.填充/更新（update）lifecycle组件内容')
    return (
      <div className="lifecycle">
        <span>{this.state.n}</span>
        <div>父组件说：{this.props.word}</div>
        <button onClick={() => this.onClick()}>+</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('4.mount之后挂载lifecycle组件完毕')
  }

  componentWillUpdate() {
    console.log('Update之前 lifecycle组件将要更新了')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.n % 2 === 0) {
      return true
    } else {
      return false
    }
  }
  componentDidUpdate() {
    console.log('Update之后 即render之后')
  }

  componentWillUnmount() {
    console.log('lifecycle组件快要死了')
  }

  componentWillReceiveProps() {
    console.log('我的父组件说话了')
  }
}

export default lifeCycle