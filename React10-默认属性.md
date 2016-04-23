### 默认属性

对于一个组件来讲，通常应该有一些默认的属性值，这样即使调用者没有 显示的指定某个属性值，依然可以通过**this.props**获得该值。这简化了属性值 缺失引起的错误检查。

在React中定义组件时，使用**getDefaultProps()**方法声明默认属性：

```html
var EzDemoComp = React.createClass({    
	//设置默认属性值    
	getDefaultProps:function(){        
		return {value : 0}    
	},    
	render: function(){
	//使用this.props.value访问属性，如果用户没有设置，则该值为默认值 
		return <div className="ez-demo">{this.props.value}</div>;            	 }});
	//创建React元素时没有指定属性值
React.render(<EzDemoComp/>,document.querySelector("#content"));
```

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)