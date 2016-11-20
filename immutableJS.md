[官方文档](https://facebook.github.io/immutable-js/)

```javascript
var map1 = { a: 1 }; 
var map2 = map1; 
map2.a = 2
map2.a // 2
map1.a // 2
```

要让 map1 不受影响: 

- 一种是将 `var map2 = map1; ` 改成 `var map2 = Object.create(map1)`
- 另一种是用 immutable.js 

```javascript
import Immutable from 'immutable';

var map1 = Immutable.Map({ a: 1, b: 3 });
var map2 = map1.set('a', 2);

map1.get('a'); // 1 
map2.get('a'); // 2
```

参考: https://github.com/kdchang/reactjs101/blob/master/Ch06/react-immutable-introduction.md

##### Immutable.Map()

```javascript
const map1 = Immutable.Map({ a: 1 });
map1.set('a', 7); // Map { "a": 7 }
map1.delete('a'); // Map {}
map1.clear(); // Map {}
map1.update('a', () => (7)) // Map { "a": 7 }
map1.merge(Map({ b: 3 })); //  Map { "a": 1, "b": 3 }
```



