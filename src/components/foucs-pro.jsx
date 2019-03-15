import React from 'react'
import CustomTextinput from './foucs'

class AutoFoucsTextInput extends React.Component {
  constructor() {
    super()
    this.textInput = React.createRef()
  }

  componentDidMount() {
    this.textInput.current.foucsTextInput();
    //  this.textInput.current相当于子组件的实例，可以访问子组件的this挂载方法
    //  这种方法仅对class声明的子组件有效
    //  不能在函数式组件上使用ref属性，因为他们没有实例
  }
  render() {
    return (
      <CustomTextinput ref={this.textInput} />
    )
  }
}
export default AutoFoucsTextInput