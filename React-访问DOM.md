### 访问DOM

在React中，有时需要_直接访问_React元素对应的DOM对象，比如读取用户的输入。 这需要两个步骤：

- **设置React元素的ref属性**

如果需要在代码中访问某个React元素的DOM对象，那么首先需要设置这个React 元素的**ref**属性。

比如，我们需要读取文本输入框的值，那么首先给这个input元素指定ref属性：

```
//JSX<input type="text" defaultValue="beijing" ref="q"    placeholder="请输入城市拼音，如：beijing"/>
```

声明了React元素的ref属性之后，可以通过**this.refs**对象访问 这个组件，比如上面的示例中：this.refs.q指向input组件对象，你应该已经注意到， 我们为React元素设置的ref属性值，在这里被用为this.refs对象的键值。

- **获得DOM对象**

在设置了React元素的ref属性后，可以使用**React.findDOMNode()**方法获得对应的 DOM对象：

```
React.findDOMNode(component)
```

参数component是一个React组件对象，如前所述，我们可以通过**this.refs**对象获得。

如果React元素已经渲染到DOM树上，**findDOMNode()**方法将返回组件对象对应的DOM节 点对象，后续就可以使用标准的DOM API操作这个DOM对象了。

