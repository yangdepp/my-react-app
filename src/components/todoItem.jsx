import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  toggle(e) {
    this.props.onToggle(e, this.props.todo)
  }
  delete(e) {
    this.props.onDelete(e, this.props.todo)
  }
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.status === 'completed'}
          onChange={this.toggle.bind(this)} /> {this.props.todo.title}
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>
    )
  }
}

export default TodoItem
