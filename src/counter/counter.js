import React, { Component } from 'react';


class counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  add(){
    console.log(this)
    this.setState({
      number: this.state.number += 1,
    })
  }
  minus = ()=>{
    console.log(this)
    this.setState({
      number: this.state.number -= 1,
    })
  }
  // minus(){
  //   console.log(this)
  // }
  render() {
    return (
      <div className="box">
        <span className="result">{this.state.number}</span>
        <button className='add' onClick={this.add.bind(this)}>+</button>
        <button className='minus' onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default counter;