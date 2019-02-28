import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  add1() {
    this.props.onAdd1()
  }
  add2() {
    this.props.onAdd2()
  }
  add3() {
    this.props.onAdd3()
  }
  add4() {
    this.props.onAdd4()
  }

  render() {
    return (
      <div>
        您点击了<span>{this.props.value}</span>次
      <div>
          <button onClick={this.add1.bind(this)}>+1</button>
          <button onClick={this.add2.bind(this)}>+2</button>
          <button onClick={this.add3.bind(this)}>如果是单数+1</button>
          <button onClick={() => { this.add4() }}>两秒钟后+1</button>
        </div>
      </div>
    )
  }
}

export default App;
