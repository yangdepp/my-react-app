import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store'
import Button from './components/button'
import Repeat from './components/Repeat'


const App = (
  <Provider store={store}>
    <div>
      <TodoList />
      <Button kind="primary" onClick={() => console.log('clicked')}></Button>
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index+1} in the list</div>}
      </Repeat>
    </div>

  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

