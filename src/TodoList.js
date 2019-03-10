import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <li>dell</li>
        </ul>
      </div>
    )
  }

  handleClick() {

  }


}

//  把store里面的state映射到组件的props里面
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

//  store.dispatch方法映射到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      console.log(e.target.value)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)