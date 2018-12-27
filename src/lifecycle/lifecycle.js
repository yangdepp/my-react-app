import React, { Component } from 'react';

let div = document.createElement('div');
document.body.appendChild(div)
console.log = function (content) {
  div.innerHTML += `${content}<br>`
}


class lifeCycle extends Component {
  onClick() {
    console.log('用户点击了')
  }

  constructor() {
    super()
    console.log('1.创建lifecycle组件')
    this.state = {
      number: 0,
    }
  }
  componentWillMount() {
    console.log('2.将要mount挂载lifecycle组件')
  }

  render() {
    console.log('3.填充lifecycle组件内容')
    return (
      <div className="lifecycle">
        <button onClick={() => this.onClick()}></button>
      </div>
    )
  }

  componentDidMount() {
    console.log('4.mount挂载lifecycle组件完毕')
  }
}

export default lifeCycle