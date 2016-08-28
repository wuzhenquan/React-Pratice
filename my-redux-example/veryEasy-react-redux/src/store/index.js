import {createStore} from 'redux'
import {addTodoActions} from '../actions'
import {todoReducer} from '../reducers'
console.log(todoReducer)
console.log(addTodoActions)
// 创建 store
export let store = createStore(todoReducer);
