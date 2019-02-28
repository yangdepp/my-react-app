import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const stateChanger = (state, action) => {
  if (state === undefined) {
    return { n: 0 }
  } else {
    if (action.type === 'add') {
      var newState = { n: state.n + action.payload }
      return newState
    } else {
      return state
    }
  }
}

const store = createStore(stateChanger)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


