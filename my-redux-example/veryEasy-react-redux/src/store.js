import {createStore} from 'redux'
import {addTodoActions} from './actions'
import {todoReducer} from './reducers'
console.log(todoReducer)
console.log(addTodoActions)
// 创建 store
let store = createStore(todoReducer);
export store
