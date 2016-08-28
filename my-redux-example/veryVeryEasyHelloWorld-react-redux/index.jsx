import React from 'react';
import { render } from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect } from 'react-redux';

// action
//这里并没有使用const来声明常量，实际生产中不推荐像下面这样做
function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}

// reducer
// 先声明一个初始 state
var initState = {text: 'Hello '}
// 写一个 reducer 函数, 这个函数根据 action.type 是什么值, 返回相应的 state
function myApp(state=initState, action){
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {text: state.text === 'Hello' ? 'Stark' : 'Hello'}
    case 'BUTTON_CLICK':
      return {
        text: 'you just click button'
      }
    default:
      return state
  }
}

// store
var store = createStore(myApp)

// 组件
class Hello extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.actions.changeText()
  }
  render(){
    return(
      <h1 onClick={this.handleClick}>{this.props.text}</h1>
    )
  }
}

class Change extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.actions.buttonClick()
  }
  render(){
    return(
      <button onClick={this.handleClick}>change</button>
    )
  }
}

// 父组件 App
class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const { actions, text} = this.props
    return(
      <div>
          <Hello actions={actions} text={text} />
          <Change actions={actions} />
      </div>
    )
   }
}

// 连接 React 组件和 Redux
// 将 state 注入进 props
function mapStateToProps(state) {
  return { text: state.text }
}
// 将 actions 注入进 props
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

// 注入, connect
// 返回一个注入了 state 和 action creator 的 React 组件。
// 也就是是一个新的已与 Redux store 连接的组件
App = connect(mapStateToProps,mapDispatchToProps)(App)

// 渲染 App 将 store 注入，并用 Provider 在顶层包住组件
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
