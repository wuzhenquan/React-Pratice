// 创建一个 action
function addTodoActions(text){
  return {
    type: 'add_todo',
    text: text,
  }
}
export {addTodoActions}
