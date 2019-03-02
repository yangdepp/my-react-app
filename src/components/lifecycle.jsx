import React from 'react'
import '../App.css'

class Father extends React.Component {
  constructor() {
    super()
    this.state = {
      word: 'hello son'
    }
  }
  callSon() {
    this.setState({
      word: 'hello wold'
    })
  }
  render() {
    return (
      <div>
        我是爸爸
        <button onClick={this.callSon.bind(this)}>call son</button>
        <Life value={this.state.word} />
      </div>
    )
  }
}



class Life extends React.Component {
  onClick() {
    console.log('用户点击了')
    this.setState({
      counter: this.state.counter + 1
    })
  }


  constructor() {
    super()
    console.log('创建life')
    this.state = {
      counter: 0
    }
  }
  componentWillMount() {
    console.log('将要mount:componentWillMount')
  }

  render() {
    console.log('render/update:填充App内容')
    return (
      <div style={{ border: '1px solid red' }}>
        {`我爸说:${this.props.value}`}
        <br />
        {this.state.counter}

        <button onClick={this.onClick.bind(this)}>按钮</button>
        <br />
      </div>
    )
  }

  componentDidMount() {
    console.log('mount完毕:componentDidMount')
  }

  componentWillUpdate() {
    console.log('数据将要更新： componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('数据更新完毕：componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('组件死亡')
  }

  shouldComponentUpdate(props, state) {
    if (state.counter % 2 === 0) {
      return true
    } else {
      return false
    }
  }


  componentWillReceiveProps() {
    console.log('父组件给我传递值了:componentWillReceiveProps')
    this.setState({
      counter: this.state.counter + 1
    })
  }

  getSnapshotBeforeUpdate
}



// 更新state：
// 1、在函数触发事件中
// 2、在componentDidMount中，因为只会挂载一次
// 3、在componentWillReceiveProps也可以设置，记录父组件调用子组件的次数
export default Father