### 容器组件

React元素也可以包含其他的子元素，这意味着响应的React组件是一个 容器组件。比如：

```
//JSX<EzPanel title="title"> this is demo content </EzPanel>
```

上例中的EzPanel声明了一个面板组件，而面板的内容在定义组件时是不可知的， 这些内容需要被加入到EzPanel渲染后的DOM元素中。

在React中，使用**this.props.children**就可以访问React子元素，这样我们 就可以轻松地将未知的React子元素包含到容器中：

```
var EzPanel = React.createClass({    render : function(){        return     <div class="ez-panel">                    {this.props.children}                </div>;    }});
```

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)