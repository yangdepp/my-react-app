import React, { Component } from 'react'
import './button.css'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      deltax: 0,
      deltay: 0,
    }
    this.myRef = React.createRef();
  }
  x(e) {
    let { x, y } = this.myRef.current.getBoundingClientRect();
    let { clientX, clientY } = e

    let deltaX = clientX - x - 5;
    let deltaY = clientY - y - 5;

    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY,
    })
  }
  end() {
    this.setState({
      active: false
    })
  }
  render() {
    return (
      <div>
        <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}>
          <span className="text">{this.props.value}</span>
          {this.state.active ?
            <span className="circle" onAnimationEnd={this.end.bind(this)} style={{ left: this.state.deltaX, top: this.state.deltaY }}>
            </span> : ''}
        </button>
      </div>
    )
  }
}

export default Button