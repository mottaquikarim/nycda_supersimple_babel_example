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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.callWeatherAPI = exports.forecastByCity = exports.weatherByCity = exports.weatherByZip = exports.weatherByLocation = undefined;

var _apiMapper = __webpack_require__(3);

var weather = (0, _apiMapper.factory)('1e519fc578fe456330a00b999dee641c', 'http://', 2.5, 'api.openweathermap.org/data', 'appid');

var weatherByLocation = exports.weatherByLocation = function weatherByLocation(lat, lon) {
	return weather({ lat: lat, lon: lon }, 'weather');
};
var weatherByZip = exports.weatherByZip = function weatherByZip(zip) {
	return weather({ zip: zip }, 'weather');
};
var weatherByCity = exports.weatherByCity = function weatherByCity(q) {
	return weather({ q: q }, 'weather');
};
var forecastByCity = exports.forecastByCity = function forecastByCity(q) {
	return weather({ q: q }, 'forecast');
};
var callWeatherAPI = exports.callWeatherAPI = function callWeatherAPI(params, endpointName) {
	return weather(params, endpointName);
};

// import {GET} from '../ajax';

// /*
// 	This module will provide methods for making
// 	API calls to the OpenWeatherMap service.
// */

// // define some constants
// const APIKEY = '1e519fc578fe456330a00b999dee641c';
// const PROTOCOL = 'http://';
// const APIVERSION = 2.5;
// const BASEURL = 'api.openweathermap.org/data'
// const APIKEYPROP = 'appid';

// // for "private" functions that are not exported, we prepend them with a
// // "_" character

// // returns something like... http://api.openweathermap.org/data/[VERSION]
// const _getBaseUrl = () => `${PROTOCOL}${BASEURL}/${APIVERSION}/`;

// // ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
// /*
//  * @function _getRequestParams
//  * @argument {params} an object containing API params to send
//  * @desc - takes the params of form: 
//  *			{ foo: 1, bar: 'true' } and converts to:
//  *			?foo=1&bar=true
//  */
// const _getRequestParams = (params) => {
//     const allParams = Object.assign({ [APIKEYPROP]: APIKEY }, params);
//     const paramStr = Object.keys(allParams).map((currentKey) => {
//         return `${currentKey}=${allParams[currentKey]}`;
//     }).join('&');
//     return '?' + paramStr;
// }

// // define api endpoints
// const _apiEndpoint = (params, endpointName) => {
//     return GET(_getBaseUrl() + endpointName + _getRequestParams(params));
//     // lat, lon
// }

// // EXPORTed functions

// // http://samples.openweathermap.org/data/2.5/weather?lat=...&lon=...
// // get weather?lat=...&lon=...
// export const weatherByLocation = (lat, lon) => _apiEndpoint({lat, lon}, 'weather');

// // get weather?zip=...
// export const weatherByZip = (zip) => _apiEndpoint({zip}, 'weather');


// // http://samples.openweathermap.org/data/2.5/weather?q=London,uk
// // get weather?q=...
// export const weatherByCity = (q) => _apiEndpoint({q}, 'weather');

// // http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b1b15e88fa797225412429c1c50c122a1
// export const forecastByCity = (q) => _apiEndpoint({q}, 'forecast');


// export const callWeatherAPI = (params, endpointName) => _apiEndpoint(params, endpointName);

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GET = exports.GET = function GET(url) {
    return new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open('GET', url);
        http.onload = function () {
            try {
                var data = JSON.parse(http.responseText);
                resolve(data);
            } catch (e) {
                reject(e);
            }
        };
        http.onerror = function () {};
        http.send();
    });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.factory = factory;

var _ajax = __webpack_require__(2);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function factory(APIKEY, PROTOCOL, APIVERSION, BASEURL, APIKEYPROP) {
	// returns something like... http://api.openweathermap.org/data/[VERSION]
	var _getBaseUrl = function _getBaseUrl() {
		return '' + PROTOCOL + BASEURL + '/' + APIVERSION + '/';
	};

	// ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
	/*
  * @function _getRequestParams
  * @argument {params} an object containing API params to send
  * @desc - takes the params of form: 
  *			{ foo: 1, bar: 'true' } and converts to:
  *			?foo=1&bar=true
  */
	var _getRequestParams = function _getRequestParams(params) {
		var allParams = Object.assign(_defineProperty({}, APIKEYPROP, APIKEY), params);
		var paramStr = Object.keys(allParams).map(function (currentKey) {
			return currentKey + '=' + allParams[currentKey];
		}).join('&');
		return '?' + paramStr;
	};

	// define api endpoints
	var _apiEndpoint = function _apiEndpoint(params, endpointName) {
		return (0, _ajax.GET)(_getBaseUrl() + endpointName + _getRequestParams(params));
		// lat, lon
	};

	return _apiEndpoint;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.weatherItem = weatherItem;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var images = {
	'rain': ['https://media.giphy.com/media/mno6BJfy8USic/giphy.gif', 'https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif', 'https://media.giphy.com/media/oSaLJmbUgZQm4/200w_d.gif', 'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif'],
	'clouds': ['https://media.giphy.com/media/mno6BJfy8USic/giphy.gif', 'https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif', 'https://media.giphy.com/media/oSaLJmbUgZQm4/200w_d.gif', 'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif']
};

var kToC = function kToC(temp) {
	return temp - 273.15;
};
var cToF = function cToF(temp) {
	return 1.8 * temp + 32;
};

var WeatherItem = exports.WeatherItem = function () {
	function WeatherItem(weatherData, container) {
		_classCallCheck(this, WeatherItem);

		var main = weatherData.main,
		    wind = weatherData.wind,
		    weather = weatherData.weather;
		var temp_max = main.temp_max,
		    temp_min = main.temp_min,
		    humidity = main.humidity;
		var speed = wind.speed;
		var description = weather[0].description;

		var weatherType = weather[0].main.toLowerCase();

		var root = document.createElement('div');
		var id = Math.floor(Math.random() * 1000) + Date.now();
		root.classList.add('weatherItem-root-' + id);
		console.log(container, weatherType);
		document.querySelector(container).appendChild(root);

		this.temp_max = temp_max;
		this.temp_min = temp_min;
		this.humidity = humidity;
		this.speed = speed;
		this.description = description;
		this.weatherType = weatherType;
		this.displayType = 'F';
		this.currentImageIndex = 0;
		this.root = root;

		this.render();
		this.bindEvents();
	}

	_createClass(WeatherItem, [{
		key: 'renderBody',
		value: function renderBody() {
			var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var root = this.root,
			    displayTemp = this.displayTemp,
			    displayType = this.displayType,
			    weatherType = this.weatherType,
			    currentImageIndex = this.currentImageIndex,
			    description = this.description;


			return '\n\t<div class="row">\n\t\t<div class="col s12 m6">\n\t\t\t<div class="card">\n\t\t\t\t<div class="card-image">\n\t\t\t\t\t<img class="js-main-image" src="' + this.renderCurrentImage() + '">\n\t\t\t\t\t<span class="card-title js-toggle-temp" style="color: black;">\n\t\t\t\t\t\t' + this.displayTemp(displayType) + '\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="card-content">\n\t\t\t\t\t<h1>\n\t\t\t\t\t\t' + description + '\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\t\t\t\t' + extra + '\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t  \t\t';
		}
	}, {
		key: 'render',
		value: function render() {
			this.root.innerHTML = this.renderBody();
		}
	}, {
		key: 'bindEvents',
		value: function bindEvents() {
			var _this = this;

			var root = this.root,
			    toggleTempType = this.toggleTempType,
			    updateImageIndex = this.updateImageIndex,
			    render = this.render;


			root.addEventListener('click', function (e) {
				var target = e.target;

				if (target.classList.contains('js-toggle-temp') || target.closest('.js-toggle-temp')) {
					_this.toggleTempType();
				}
				if (target.classList.contains('js-main-image') || target.closest('.js-main-image')) {
					_this.updateImageIndex();
				}
				_this.render();
			});
		}
	}, {
		key: 'renderCurrentImage',
		value: function renderCurrentImage() {
			var weatherType = images[this.weatherType];
			if (typeof weatherType === "undefined") return "https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif";
			return images[this.weatherType][this.currentImageIndex];
		}
	}, {
		key: 'toggleTempType',
		value: function toggleTempType() {
			this.displayType = this.displayType === 'F' ? 'C' : 'F';
		}
	}, {
		key: 'updateImageIndex',
		value: function updateImageIndex() {
			// Alternative "clever" way
			// currentImageIndex = ++currentImageIndex % images[weatherType].length;


			// clearer way of approaching
			this.currentImageIndex++;

			if (this.currentImageIndex === images[this.weatherType].length) {
				this.currentImageIndex = 0;
			}
		}
	}, {
		key: 'displayTemp',
		value: function displayTemp(displayType) {
			var shouldConvertToCelcius = displayType === 'C';

			var maxTemp = void 0;
			var minTemp = void 0;
			var label = void 0;

			if (shouldConvertToCelcius) {
				console.log(this);
				maxTemp = Math.floor(kToC(this.temp_max));
				minTemp = Math.floor(kToC(this.temp_min));
				label = 'C';
			} else {
				console.log(this);
				maxTemp = Math.floor(cToF(kToC(this.temp_max)));
				minTemp = Math.floor(cToF(kToC(this.temp_min)));
				label = 'F';
			}

			return '<strong>' + maxTemp + ' &deg;' + label + '</strong>/ <em>' + minTemp + ' &deg;' + label + '</em>';
		}
	}]);

	return WeatherItem;
}();

function weatherItem() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(WeatherItem, [null].concat(args)))();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weather = __webpack_require__(0);

var _WeatherForecast = __webpack_require__(8);

(0, _weather.forecastByCity)('nyc, usa').then(function (data) {
    console.log(data);
    var dataToDisplay = data.list.filter(function (dataItem, index) {
        return index % 8 === 0;
    });

    (0, _WeatherForecast.weatherForecast)(dataToDisplay, '#app');
    // console.log(dataToDisplay)
});

(0, _weather.forecastByCity)('atlanta, usa').then(function (data) {
    console.log(data);
    var dataToDisplay = data.list.filter(function (dataItem, index) {
        return index % 8 === 0;
    });

    (0, _WeatherForecast.weatherForecast)(dataToDisplay, '#app');
    // console.log(dataToDisplay)
});

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.weatherForecast = weatherForecast;

var _weatherItem_Constructor_ES = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherForecast = function () {
	function WeatherForecast(data, container) {
		_classCallCheck(this, WeatherForecast);

		var root = document.createElement('div');
		var id = Math.floor(Math.random() * 1000) + Date.now();
		root.classList.add('weatherItem-root-' + id);
		document.querySelector(container).appendChild(root);

		this.data = data;
		this.root = root;
		this.id = id;

		this.render();

		data.forEach(function (currentWeather) {
			new _weatherItem_Constructor_ES.WeatherItem(currentWeather, '.weatherItem-root-' + id + ' .js-wrapper');
		});
	}

	_createClass(WeatherForecast, [{
		key: 'render',
		value: function render() {
			var data = this.data,
			    root = this.root,
			    id = this.id;


			root.innerHTML = '\n\n<div class="container">\n\t<div class="row js-wrapper">\n\t</div>  \n</div>\n\n\t\t';
		}
	}]);

	return WeatherForecast;
}();

function weatherForecast() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return new (Function.prototype.bind.apply(WeatherForecast, [null].concat(args)))();
}

/***/ })
/******/ ]);