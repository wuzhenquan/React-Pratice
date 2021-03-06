webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _actions = __webpack_require__(175);

	var _store = __webpack_require__(176);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	console.log(_store.store);
	// 创建一个 react component

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	    _this.state = { items: _store.store.getState() }; // 对数据进行初始渲染
	    _this.onChange = _this.onChange.bind(_this);
	    _this.handleAdd = _this.handleAdd.bind(_this);
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var unsubscribe = _store.store.subscribe(this.onChange); // 监听store的状态变化，当状态变化时，触发onChange回调。
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange() {
	      this.setState({ items: _store.store.getState() }); // 获取最新的state，并重新渲染视图
	    }
	  }, {
	    key: 'handleAdd',
	    value: function handleAdd() {
	      var input = _reactDom2.default.findDOMNode(this.refs.todo);
	      var value = input.value.trim();
	      if (value) {
	        _store.store.dispatch((0, _actions.addTodoActions)(value)); // 修改 state
	      }
	      input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', { ref: 'todo', type: 'text', placeholder: '输入todo项', style: { marginRight: '10px' } }),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.handleAdd },
	          '点击添加'
	        ),
	        _react2.default.createElement(
	          'ul',
	          null,
	          this.state.items.map(function (item) {
	            return _react2.default.createElement(
	              'li',
	              null,
	              item.text
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('container'));

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);


/***/ },

/***/ 175:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 创建一个 action
	function addTodoActions(text) {
	  return {
	    type: 'add_todo',
	    text: text
	  };
	}
	exports.addTodoActions = addTodoActions;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.store = undefined;

	var _redux = __webpack_require__(160);

	var _actions = __webpack_require__(175);

	var _reducers = __webpack_require__(177);

	console.log(_reducers.todoReducer);
	console.log(_actions.addTodoActions);
	// 创建 store
	var store = exports.store = (0, _redux.createStore)(_reducers.todoReducer);

/***/ },

/***/ 177:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 创建一个 reducer
	function todoReducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'add_todo':
	      return state.slice(0).concat({
	        text: action.text,
	        completed: false
	      });
	      break;
	    default:
	      return state;
	  }
	}
	exports.todoReducer = todoReducer;

/***/ }

});