import React, { Component } from 'react';

class counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      peoples: [{
        id: '1',
        name: 'yang',
      },
      {
        id: '2',
        name:'yang1'
      },
      {
        id: '3',
        name: 'yang2'
      }]
    }
    this.minus = this.minus.bind(this)
  }
  add() {
    console.log(this)
    this.setState({
      number: this.state.number += 1,
    })
    this.props.selectType(1);
  }
  // minus = () => {
  //   console.log(this)
  //   this.setState({
  //     number: this.state.number -= 1,
  //   })
  //   this.props.selectType(2);
  // }
  minus() {
    console.log(this)
    this.setState({
      number: this.state.number -= 1,
    })
    this.props.selectType(2);
  }
  render() {
    return (
      <div className="box">
        <span className="result">{this.state.number}</span>
        <button className='add' onClick={this.add.bind(this)}>+</button>
        <button className='minus' onClick={this.minus}>-</button>
        <ul>
          {this.state.peoples.map((item, i) => {
            return <li key={i}>{item.name}</li>
            })
          }
        </ul>
        <span className="name">父组件名字:{this.props.name}</span>
      </div>
    );
  }
}

export default counter;

/**
 *
 * 1、jsx语法写<div>{false}</div> ,写false，null和undefined都不显示，0正常显示，定义一个变量中间有空格，也只显示一个
2、默认传一个props：className.defaultProps = {name: ‘yang’}，在类里面定义静态方法 static defaultProps = {name: ‘yang’}
3、props的类型检测???
4、setState是一个异步的操作，所以
5、生命周期函数： 1.componentWillMount ：发送一些ajax请求  2.componentDidMount(挂载后)，找到DOM元素，绑定事件
	3、componentWillReceviceProps:props开始改变的时候 4、shouldComponentUpdate:如果返回true，说明组件需要render
	5、componentWillUpdate:会做一些更新前的操作

6、阻止事件冒泡，原生中的e和event不是一样的，react中的event是被封装过，react中的event有一个事件池，在触发的时候，为了尽可能复用event对象，这个event被触发后，就会销毁这个对象。所以不要把event放在异步执行域里面

7、<div ref={(content) => {this.contentRef = content}}></div>
	在外部改变  this.contentRef.style.color = ‘red’
 */