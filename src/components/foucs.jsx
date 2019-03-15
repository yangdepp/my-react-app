import React from 'react'


class CustomTextinput extends React.Component {
  constructor() {
    super()
    this.textInput = React.createRef();
    this.foucsTextInput = this.foucsTextInput.bind(this)
  }

  foucsTextInput() {
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />

        <button onClick={this.foucsTextInput}>点击聚焦</button>
      </div>
    )
  }



}

export default CustomTextinput