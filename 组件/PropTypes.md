```javascript
const propTypes = {
  name: PropTypes.string,
  dataKey: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  th: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  td: PropTypes.oneOfType([
    PropTypes.element, PropTypes.func, PropTypes.oneOf([
      'int', 'float', 'percent', 'changeRate'
    ])
  ]),
};

```



作者：琼玖
链接：https://zhuanlan.zhihu.com/p/20848369
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。