#### getInitialState: function(){return stateObject}

设置组件初始状态


`getInitialState()`方法*必须*返回一个*JSON对象*或空值*null*， 这意味着即使你只需要一个简单的标志作为状态，比如true或false，也要把它放到JSON对象里。

#### this.state

读取当前状态

#### setState(currentState)

设置组件当前状态

尽管可以使用`this.state`来直接设置组件当前状态，但React要求我们使用`setState()`方法来进行状态设置。这是因为，`setState()`方法会自动 地重新渲染组件，而这通常是我们所期望的。

参数currentState是一个JSON对象

实例

```html
react.createClass({
 	getInitialState:,
	onClick:,
	render:,
})
```