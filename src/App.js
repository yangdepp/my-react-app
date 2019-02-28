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
function mapStateToProps(state) {
  return {
    n: state.n
  }
}
//用来生成action
// 两种写法，一种是对象，一种是函数
// const mapDispatchToProps = {
//   add1: () => {
//     return { type: 'add', payload: 1 }
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    add1: () => dispatch({ type: 'add', payload: 1 })
  }
}

// function connect(a) {
//   return function (b) {
//     console.log(a + b)
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
