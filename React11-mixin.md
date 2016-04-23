### 默认属性

### 复用代码：mixin

如果多个组件的实现代码中有一些公共的部分，那么可以使用React的**mixin**特性 将这部分代码提出来公用。mixin是掺合，混合，糅合的意思，即可以将一个对象的属性 拷贝到另一个对象上。

在React中，使用**mixin**有两个步骤：

- **定义一个mixin对象**

mixin对象是一个JavaScript对象，这个对象的属性将被拷贝到React组件类的原型对象上:

```javascript
var EzLoggerMixin = {    
	log:function(){//sth. happened here.}
};
```

- **在定义组件时使用这个mixin对象**

在使用**React.createClass()**定义组件时，给传入的原型对象设置**mixins**属性：

```javascript
React.createClass({    
	mixins:[EzLoggerMixin],    
	render:function(){//your render stuff.}
});
```

**mixins**属性是一个*数组*，这意味着可以指定*多个_mixin对象，但记住这些 mixin对象、以及在createClass()中传入的原型对象，它们的属性*不能同名_。

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)