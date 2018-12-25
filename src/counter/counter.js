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
    this.props.selectType(1);
  }
  minus = ()=>{
    console.log(this)
    this.setState({
      number: this.state.number -= 1,
    })
    this.props.selectType(2);
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
        <span className="name">name:{this.props.name}</span>
      </div>
    );
  }
}

export default counter;