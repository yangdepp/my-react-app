import React, { Component } from 'react';
import TodoInput from './components/todoInput.jsx'
import TodoItem from './components/todoItem.jsx'


class App extends Component {
  constructor() {
    super()
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '第一个待办' }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>
    })

    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        {/* <TodoInput /> */}
        <input type="text" value={this.state.newTodo} />
        {/* <TodoItem /> */}
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
