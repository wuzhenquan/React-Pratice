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

class Change extend React.Component {
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
    const { action, text} = this.props
    return(
      <div>
          <Hello actions={actions} text={text} />
          <Change actions={actions} />
      </div>
    )
   }
}

// 连接 React 组件和Redux
//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
//由于我们这个应用太小，只有一个属性，所以只有text这个字段。
function mapStateToProps(state) {
  return { text: state.text }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

//这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps,mapDispatchToProps)(App)
//Provider是react-redux直接提供的
//store是我们在第3步中生成的

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
