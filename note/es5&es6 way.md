#### 创建一个组件

es5

```
var Hello = React.createClass({
    render: function () {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
            </div>
        );
    }
});
```

es6

```
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
            </div>
        );
    }

}
```