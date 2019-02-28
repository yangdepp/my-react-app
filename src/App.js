import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        您点击了<span>{this.props.n}</span>次
      <div>
          <button onClick={this.props.add1}>+1</button>
          <button >+2</button>
          <button >如果是单数+1</button>
          <button >两秒钟后+1</button>
        </div>
      </div>
    )
  }
}

// 用来生成props数据
function getPartialStore(state) {
  return {
    n: state.n
  }
}
//用来生成action
const actionCreator = {
  add1: () => {
    return { type: 'add', payload: 1 }
  }
}

// function connect(a) {
//   return function (b) {
//     console.log(a + b)
//   }
// }

export default connect(getPartialStore, actionCreator)(App);
