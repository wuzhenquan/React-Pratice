import React from 'react'
import ReactDOM from 'react-dom'
import {addTodoActions} from './actions/'
import {store} from './store/'
console.log(store)
// 创建一个 react component
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {items: store.getState()} // store.getState() 对数据进行初始渲染
    this.onChange = this.onChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount(){
    let unsubscribe = store.subscribe(this.onChange) // store.subscribe() 监听store的状态变化，当状态变化时，触发onChange回调。
  }
  onChange(){
    this.setState({items: store.getState()}) // store.getState() 获取最新的state，并重新渲染视图
  }
  handleAdd(){
    let input = ReactDOM.findDOMNode(this.refs.todo)
    let value = input.value.trim()
    if(value){
      store.dispatch(addTodoActions(value)) // store.dispatch() 修改 state
    }
    input.value = ''
  }
  render(){
    return(
    <div>
      <input ref="todo" type="text" placeholder="输入todo项" style={{marginRight:'10px'}} />
      <button onClick={this.handleAdd}>点击添加</button>
      <ul>
        {this.state.items.map((item) => {
           return <li>{item.text}</li>
        })}
      </ul>
    </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('container'))
