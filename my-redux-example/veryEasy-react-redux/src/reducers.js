// 创建一个 reducer
export function todoReducer(state=[], action){
  switch (action.type) {
    case 'add_todo':
      return state.slice(0).concat({
        text: action.text,
        completed: false,
      })
      break
    default: return state
  }
}
