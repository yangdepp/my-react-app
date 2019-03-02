import React, { Component } from 'react';
import TodoInput from './components/todoInput.jsx'
import TodoItem from './components/todoItem.jsx'
import 'normalize.css'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newTodo: '',
      todoList: []
    }
  }

  addTodoItem(event) {
    if(event.target.value){
      this.state.todoList.push({
        id: idMaker(),
        title: event.target.value,
        status: null,
        deleted: false,
      })
    }
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }

  onChangeTitle(event) {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed'
    this.setState(this.state)
  }
  delete(event, todo) {
    todo.delete = true;
    this.setState(this.state)
  }

  render() {
    let todos = this.state.todoList
      .filter((item) => !item.delete)
      .map((item, index) => {
        return (
          <li key={index}>
            <TodoItem todo={item} onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)} />
          </li>
        )
      })

    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <TodoInput content={this.state.newTodo}
          onSubmit={this.addTodoItem.bind(this)}
          onChange={this.onChangeTitle.bind(this)} />
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;


let id = 0;
function idMaker() {
  id += 1
  return id;
}