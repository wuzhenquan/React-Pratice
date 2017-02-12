##### 我要知道 redux 的三大原则

http://redux.js.org/docs/introduction/ThreePrinciples.html

##### 我要知道 react 和 redux 是如何联系起来的

用 [react-redux](https://github.com/reactjs/react-redux)

react-redux 的作用: [apart from subscribing you to a Redux store, inject dispatch into your component's props](http://redux.js.org/docs/Troubleshooting.html)

react-redux 的 API 就两个, `<Provider store/>` 和 `connect([mapStateToProps],[mapDispacthTOProps],[mergeProps],[options])`

react + redux 的目录结构
```javascript
|- React Project
	|- /components/
	|- /containers/
	  |- App.js
	|- /actions/
	|- /reducers/
	|- /dist
	|- index.js
	|- index.html
	|- package.json
	|- webpack.config.js
```
两步:

1. 在 index.js 下 `let store = createStore(todoApp)`(todoApp 是 reducer), 并将 store 作为 [Provider](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store) 组件的属性传入到 React 组件里

   ```javascript
   import { Provider } from 'react-redux'
   import todoApp from './reducers/reducers.js'
   let store = createStore(todoApp, applyMiddleware(thunk))
   render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   )
   ```

2. 对于在 Provider 的子组件 App.js 用 [connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) 将 state 和 actions 注入到组件里. connect 之后,便可通过 this.props 访问 state 和 actions, 用 this.props.dispatch 去 diapatch actions( 当然用了 redux-thunk 就不需要这样 dispatch 了)

   ```javascript
   import { connect } from 'react-redux'
   class App extends Component {}
   function mapStateToProps(state){}
   funciton mapDispatchToProps(dispatch){}
   export defautl connect(mapStateToProps, mapDispatchToProps)(App)
   ```

> 有了 react-redux, 用 connect 注入之后, 用 this.props.dispatch 便可直接 dispatch 一个 action, 如果不用的话, 得 store.dispatch 一下了, 实际上, this.props.dispatch 只是 react-redux 内部用了 `let store = createStore(reducerFunction); store.dispatch;` 

另外, 可以用 bindActionCreators 将 dispatch 绑定到 action 函数上, 这样在组件里可以直接调用 action 的函数而不要 dispatch 了.  详情看 [react-redux API Inject dispatch and all action creators](https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-todos-and-all-action-creators) 

```javascript	
  funciton mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(todoActionCreators, dispatch)}
  }
```



##### redux-thunk

 将同步的 actions 变成异步的 actions, 仅此而已

enhance [createStore()](http://redux.js.org/docs/api/createStore.html) with [applyMiddleware()](http://redux.js.org/docs/api/applyMiddleware.html) lets you [express asynchronous actions in a convenient way](http://redux.js.org/docs/advanced/AsyncActions.html).

两步:

1. 在 index.js 下 `import { createStore,applyMiddleware } from 'redux'; let store = createStore(todoApp, applyMiddleware(thunk))`
2. 在 actions.js 下改一下 action creator, 使其 return 的是一个带有 dispatch 参数的函数而不是一个 action object. 在这个函数中, 我们就可以通过这个 dispatch 参数 dispatch 无限个 action 了.