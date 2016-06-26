### 表单输入

在React中，表单输入元素如 input, textarea, option等，和其他标准的HTML元素 相比需要特殊的注意：

- **文本输入框**

不要使用value属性设置文本输入框元素的初值，应当使用defaultValue：

```
//JSX<input type = "text" defaultValue = "demo"/>  
```

- **复选按钮**

不要使用checked属性设置复选按钮的初始选中状态，应当使用defaultChecked：

```
//JSX<input type = "checkbox" defaultChecked/> 
```

- **单选按钮组**

不要使用option元素的selected属性设置单选按钮组的初始选中状态，应当使用 select元素的defaultValue：

```
//JSX<select defaultValue="A">    <option value="A">China</option>    <option value="B">India</option>    <option value="C">Japan</option></select>
```

来自[汇智网](http://www.hubwiz.com/class/552762019964049d1872fc88)