import React from 'react'

class TodoInput extends React.Component {
  constructor() {
    super()
  }
  submit(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
  changeTitle(e) {
    this.props.onChange(e)
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.content}
          onKeyPress={this.submit.bind(this)}
          onChange={this.changeTitle.bind(this)}
        />
      </div>
    )
  }
}

export default TodoInput