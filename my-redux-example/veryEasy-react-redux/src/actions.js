// 创建一个 action
export function addTodoActions(text){
  return {
    type: 'add_todo',
    text: text,
  }
}
