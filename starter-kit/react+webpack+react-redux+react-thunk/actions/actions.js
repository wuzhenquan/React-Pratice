export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }
export function addTodo(text) {
  return (dispatch) => {
    dispatch({ type: ADD_TODO, text })
  }
}

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }
export function completeTodo(index) {
  return (dispatch) => {
    dispatch({ type: COMPLETE_TODO, index })
  }
}

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }
export function setVisibilityFilter(filter) {
  return (dispatch) => {
    dispatch({ type: SET_VISIBILITY_FILTER, filter })
  }
}

export function searchGithubUser(username){
  return function(dispatch){
    return fetch(`https://api.github.com/search/users?q=${username}`).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log(data);
        }).catch(function(e) {
          console.log("Oops, error");
        });
  }
}
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
