import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function stateChanger(state, action) {
  if (state === undefined) {
    return {n: 0}
  } else {
    if (action.type === 'add') {
      var newState = state + action.payload
      return newState
    } else {
      return state
    }
  }
}

const store = createStore(stateChanger)


ReactDOM.render(
  <Provider store={store}>
    <App value={store.getState()}/>,
  </Provider>,
  document.getElementById('root')
);

