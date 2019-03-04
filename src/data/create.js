// 创建一个store
import { createStore, combineReducers } from 'redux'

import increase from './reducers/reducer'

const reducers = combineReducers({
  increase
})

export default createStore(reducers)