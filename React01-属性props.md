### 属性 : props

组件应该提供一些属性供开发者在不同的场景下可以对组件实例元素的行为 外观进行调整，这样可以提高组件的利用效率。

在React中，使用**props**字段访问实例元素的属性。

例如，在下面的JSX片段中，EzLampComp组件的实例元素有一个属性onoff：

```
React.render(< EzLampComp onoff="off" /> ,    document.querySelector("#content"));
```

那么在EzLampComp组件的实现中，我们可以通过**props**字段访问这个属性， 并根据属性值设置其样式类。

在JSX中，我们也可以将一个**JavaScript表达式**赋给React元素的属性，这时需要 使用一对*大括号*来代替*引号*：

```
var myOnoff = "on";React.render(    < EzLampComp onoff={myOnoff} />,    document.querySelector("#content"));
```

如果你觉得不好理解，那么我们把上面的JSX代码转换成JavaScript：

```
var myOnoff = "on";React.render(    React.createElement(        EzLampComp,        {            onoff : myOnoff        }),    document.querySelector("#content"));
```

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)