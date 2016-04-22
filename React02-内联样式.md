### 内联样式

在前面的示例中，每当需要设定元素的样式，我们总是使用样式类。但有时我们的确需要 直接在元素上声明内联样式，就像在HTML中一样：

```
//HTML<div style="width:200px;height:200px;"></div>
```

在React元素中声明样式，需要给出一个JSON对象，其字段对应样式名称，比如要渲染出 上面的HTML片段，需要这样：

```
var myStyle = {    width:"200px",    height:"200px"};//JSXvar e = <div style={myStyle} />;//JavaScriptvar e = React.createElement(    "div",{        style : myStyle    });//renderReact.render(e,...);    
```

- **注意1** - 对应样式名称的字段，需要使用*驼峰式*命名

比如：*border-radius*样式需要使用*borderRadius*来访问，而*background-image* 样式需要使用*backgroundImage*来访问。

- **注意2** - 样式名称中的供应商前缀，除*ms*外都需要大写首字母

对于供应商前缀（-webkit, -moz, -o, -ms），除了*ms*，其他都需要将首字母大写。 比如：*-webkit-transition*应当通过*WebkitTransition*来访问，然而*-ms-transition* 则需要通过*msTransition*来访问。

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)