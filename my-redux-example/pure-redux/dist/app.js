webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _redux = __webpack_require__(1);

	var _reducers = __webpack_require__(15);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _actions = __webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _redux.createStore)(_reducers2.default);
	// 测试代码
	console.log(store.getState());

	// 每次 state 更新时，打印日志
	// 注意 subscribe() 返回一个函数用来注销监听器
	var unsubscribe = store.subscribe(function () {
	  return console.log(store.getState());
	});
	// 发起一系列 action
	store.dispatch((0, _actions.addTodo)('Learn about actions'));
	store.dispatch((0, _actions.addTodo)('Learn about reducers'));
	store.dispatch((0, _actions.addTodo)('Learn about store'));
	store.dispatch((0, _actions.toggleTodo)(0));
	store.dispatch((0, _actions.toggleTodo)(1));
	store.dispatch((0, _actions.setVisibilityFilter)(_actions.VisibilityFilters.SHOW_COMPLETED));

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(1);

	var _actions = __webpack_require__(16);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;


	function visibilityFilter() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? SHOW_ALL : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.SET_VISIBILITY_FILTER:
	      return action.filter;
	    default:
	      return state;
	  }
	}

	function todos() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _actions.ADD_TODO:
	      return [].concat(_toConsumableArray(state), [{
	        text: action.text,
	        completed: false
	      }]);
	    case _actions.TOGGLE_TODO:
	      return state.map(function (todo, index) {
	        if (index === action.index) {
	          return Object.assign({}, todo, {
	            completed: !todo.completed
	          });
	        }
	        return todo;
	      });
	    default:
	      return state;
	  }
	}

	var todoApp = (0, _redux.combineReducers)({
	  visibilityFilter: visibilityFilter,
	  todos: todos
	});

	exports.default = todoApp;

/***/ },

/***/ 16:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addTodo = addTodo;
	exports.toggleTodo = toggleTodo;
	exports.setVisibilityFilter = setVisibilityFilter;
	var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
	var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
	var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

	var VisibilityFilters = exports.VisibilityFilters = {
	  SHOW_ALL: 'SHOW_ALL',
	  SHOW_COMPLETED: 'SHOW_COMPLETED',
	  SHOW_ACTIVE: 'SHOW_ACTIVE'
	};

	// 输出生成 action 的方法
	function addTodo(text) {
	  return { type: ADD_TODO, text: text };
	}
	function toggleTodo(index) {
	  return { type: TOGGLE_TODO, index: index };
	}
	function setVisibilityFilter(filter) {
	  return { type: SET_VISIBILITY_FILTER, filter: filter };
	}

/***/ }

});