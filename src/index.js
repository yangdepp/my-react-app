import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'


const stateChanger = (state, action) => {
  if (state === undefined) {
    return 0
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
store.subscribe(() => {
  render()
})
function add3() {
  if (store.getState() % 2 === 1) {
    store.dispatch({ type: 'add', payload: 1 })
  }
}

function add4() {
  setTimeout(() => {
    store.dispatch({ type: 'add', payload: 1 })
  }, 2000)
}


function render() {
  ReactDOM.render(
    <App value={store.getState()}
      onAdd1={() => { store.dispatch({ type: 'add', payload: 1 }) }}
      onAdd2={() => { store.dispatch({ type: 'add', payload: 2 }) }}
      onAdd3={add3}
      onAdd4={add4}
    />,
    document.getElementById('root'));
}
render()


