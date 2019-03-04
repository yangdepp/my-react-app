import React, { Component } from 'react';
import './App.css';

import { connect, Provider } from 'react-redux'
import store from './data/create'
import increase from './data/actions/action'

class App extends Component {
  constructor() {
    super()
    this.state = {
      btnType: '?'
    }
  }
  click () {
    this.props.increase(10)
  }
  render () {
    return (
      <div className="App" onClick={this.click.bind(this)}>
        num: {this.props.num}
      </div>
    );
  }
}

// function mapStateToProps(state){
//   return {
//     num: state.increase.num
//   }
// }

App = connect((state) => ({
  num: state.increase.num
}), { increase })(App)

class Main extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}



export default Main;
