### JSX可展开属性

在JSX中，有时一个React元素的属性很多，比如在示例代码中设置音量推子组件 的属性：

```
//JSX<div className="ez-slider" onMouseDown = {this.onMouseDown} onMouseMove = {this.onMouseMove} onMouseUp = {this.onMouseUp}/>
```

JSX有一个很好的特性让我们可以给React元素设置一个JSON对象作为属性包，这个属性 包将按照字段*展开*为分立的React元素的属性，被称为可展开属性。使用如下 方式在React元素上声明一个可展开属性，其中propbag是一个JSON对象：

```
<any {...propbag}/>
```

比如，前面的示例使用可展开属性的方式改写为：

```html
//定义属性包
var props = {    
  className : "ez-slider",    
  onMouseDown : this.onMouseDown,    
  onMouseUp : this.onMouseUp,    
  onMouseMove : this.onMouseMove
}; 
//传入属性包
var rel = <div {...props}></div>;
```

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)