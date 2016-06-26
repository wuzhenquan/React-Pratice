- state: 当组件状态 `state` 有更改的时候，React 会自动调用组件的 `render` 方法重新渲染整个组件的 UI

- JSX语法规则: 遇到HTML标签(`<></>`), 就用HTML规则解析; 遇到代码块(`{}`), 就用JavaScript规则解析

- JSX中, 可以直接通过`React.createClass()`来定义组件

- `this.refs.q`和`React.findDOMNode(this.refs.q)`的区别, 用`console.log()`返回了, 发现没区别, 那到底是有什么区别呢.个人感觉用`React.findDOMNode(this.refs.q)`比较保险😅

- 注意不要在`Reac.createClass()`里的`render`里的`return`使用`this.refs`
  ```html
  var abc = React.createClass({
    render: function(){
      return (
        // 下面这个是错的, 打印出来的"this"为null
        <div onClick={function(){console.log(this.refs)}}></div>
      )
    }
  })
  ```
- React Developer Tools会自动检测React组件，不过在webpack-dev-server模式下，webpack会自动将React组件放入到iframe下，导致React组件检测失败，变通方法是webpack-dev-server配置在--inline模式下即可: `webpack-dev-server --inline`


