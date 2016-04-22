- componentWillMount()
- componentDidMount()
- componentWillReceiveProps(nextProps)
- shouldComponentUpdate(nextProps, nextState)
- componentWillupdate(nextProps, nextState)


- componentDidUpdate(prevProps, prevState)
- componentWillUnmount()

### 生命周期

在组件实例的整个周期中，React将在特定的时间点调用以下方法：

- **componentWillMount()** - 组件实例即将挂接（初次渲染）时被调用

这个方法在整个生命周期中只会被调用一次。

- **componentDidMount()** - 组件实例挂接（初次渲染）后被调用

这个方法在整个生命周期中只会被调用一次。

- **componentWillReceiveProps(nextProps)** - 组件实例即将设置新属性时被调用

参数nextProps表示即将应用到组件实例上的新属性值。

这个方法在初次渲染时不会被调用。在此方法内调用setState()不会引起重新渲染。

- **shouldComponentUpdate(nextProps, nextState)** - 组件实例即将重新渲染时被调用

参数nextProps传入即将应用到组件实例上的新属性值，参数nextState传入组件实例即将被 设置的状态值。如果这个方法返回false，那么组件实例就不会被重新渲染。除非我们明确地 知道，新的属性和状态不需要进行重新渲染，否则这个方法都应该返回true。

这个方法在初次渲染时或通过forceUpdate()方法进行渲染时不会被调用。

- **componentWillUpdate(nextProps, nextState)** - 组件实例即将重新渲染时被调用

这个方法在初次渲染时不会被调用。**注意**：不能在此方法内调用setState()。

- **componentDidUpdate(prevProps, prevState)** - 组件实例重新渲染后被调用

这个方法在初次渲染时不会被调用。

- **componentWillUnmount()** - 组件实例即将从DOM树移除时被调用

这个方法在整个生命周期中只会被调用一次。

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)