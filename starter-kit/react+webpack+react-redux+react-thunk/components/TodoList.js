import React, {Component, PropTypes} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render(){
  let { visibleTodos, onTodoClick} = this.props;
    return (
      <ul>  
        {
          visibleTodos.map((todo, index) => {
            return (
              <Todo 
                {...todo}
                key={index}
                onTodoClick={() => {onTodoClick(index)}}
              />
            )
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({ // 是否符合指定格式
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
}
