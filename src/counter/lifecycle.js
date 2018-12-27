import React , {Component} from 'react';

class lifeCycle extends Component{
  constructor(){
    super()
    this.state = {
      number: 0,
    }
  }
  render(){
    return (
        <div>
          <span className="result">number</span>
          
        </div>
    )
  }
}