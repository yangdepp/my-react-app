import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={this.handleDelete.bind(this, index)}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  handleDelete(index) {
    this.props.handleDelete(index);
  }
}

//  把store里面的state映射到组件的props里面
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

//  store.dispatch方法映射到props上
//  接受的这个dispatch参数就是store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_list_item',
      }
      dispatch(action)
    },
    handleDelete(index) {
      console.log(index)
      const action = {
        type: 'delete_list_item',
        index: index,
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)