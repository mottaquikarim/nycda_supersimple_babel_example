/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _compose = __webpack_require__(16);

var _compose2 = _interopRequireDefault(_compose);

var _list = __webpack_require__(18);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = document.querySelector('#app');

window.addEventListener("hashchange", function () {
  var locationHash = location.hash;
  if (locationHash.indexOf('#/') === 0) {
    locationHash = locationHash.slice(2);
  }

  var route = locationHash.toLowerCase();

  if (route === 'compose') {
    (0, _compose2.default)(Main);
  } else if (route === 'list') {
    (0, _list2.default)(Main);
  }
}, false);

location.hash = '#/compose';

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Compose;

var _storage = __webpack_require__(17);

var _onBtnSubmit = function _onBtnSubmit() {
	document.querySelector('.js-compose-submit').addEventListener('click', function (e) {
		var todoItem = document.querySelector('.js-compose-todo').value;
		(0, _storage.setItem)(todoItem);
		location.hash = '#/list';
	});
};

var _renderInput = function _renderInput() {
	var html = '\n<div>\n\t<input type="text" class="js-compose-todo" />\n\t<button type="submit" class="js-compose-submit">Submit</button>\n</div>\n\t';

	return html;
};

function Compose(wrapper) {
	wrapper.classList.remove('loading');
	wrapper.innerHTML = _renderInput();

	_onBtnSubmit();
}

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _key = 'todolist';
var _getItems = function _getItems() {
	var items = localStorage.getItem('_key');

	if (items === null) {
		return {
			todos: []
		};
	} else {
		return JSON.parse(items);
	}
};
var _setItems = function _setItems(storage) {
	localStorage.setItem('_key', JSON.stringify(storage));
};

var setItem = exports.setItem = function setItem(todo) {
	console.log('HERE');
	// first, read what is inside the localStorage
	var storage = _getItems();
	console.log(storage);
	// checks to see if there are todos
	var todos = storage.todos;


	todos.push(todo);

	_setItems(storage);
};

var getTodos = exports.getTodos = function getTodos() {
	return _getItems().todos;
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = List;

var _storage = __webpack_require__(17);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _renderList = function _renderList() {
	return '\n<div class="container">\n\t<div class="row">\n\t\t' + (0, _storage.getTodos)().map(function (currentTodo) {
		return '<div class="one column" style="border: 1px solid black;">' + currentTodo + '</div>';
	}).join('') + '\n\t</div>\n</div>\n\t';
	return ['<div class="container">', '<div class="row">'].concat(_toConsumableArray((0, _storage.getTodos)().map(function (currentTodo) {
		return '<div class="one column" style="border: 1px solid black;">' + currentTodo + '</div>';
	})), ['</div>', '</div>']).join('');
};

function List(wrapper) {
	wrapper.classList.remove('loading');
	wrapper.innerHTML = _renderList();
}

/***/ })

/******/ });