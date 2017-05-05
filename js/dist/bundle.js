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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weather = __webpack_require__(1);

var _weatherItemClassES = __webpack_require__(5);

(0, _weather.forecastByCity)('nyc, usa').then(function (data) {
    console.log(data);
    // data.list.forEach((dataItem) => {
    //     const k = new WeatherItem(dataItem, '#app');
    //     console.log(k)
    // })

    var k = new _weatherItemClassES.WeatherItem(data.list[0], '#app');
    k.foo = 1;
    k.bar = function bar() {
        console.log('k is here, lol');
    };
    var l = new _weatherItemClassES.WeatherItem(data.list[1], '#app');
    l.foo = 2;
    var m = new _weatherItemClassES.WeatherItem(data.list[2], '#app');

    _weatherItemClassES.WeatherItem.prototype.bar = function baz() {
        console.log('here');
    };
    console.log(k, l, m);
});

/***/ }),
/* 1 */
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
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WeatherItem = WeatherItem;
var images = {
	'clouds': 'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif'
};

var kToC = function kToC(temp) {
	return temp - 273.15;
};
var cToF = function cToF(temp) {
	return 1.8 * temp + 32;
};

function WeatherItem(weatherData, container) {
	var main = weatherData.main,
	    wind = weatherData.wind,
	    weather = weatherData.weather;


	this.temp_max = main.temp_max;
	this.temp_min = main.temp_min;
	this.humidity = main.humidity;

	this.speed = wind.speed;
	this.description = weather[0].description;
	this.weatherType = weather[0].main.toLowerCase();

	this.root = document.createElement('div');
	var id = Math.floor(Math.random());
	this.root.classList.add('weatherItem-root-' + id);
	document.querySelector(container).appendChild(this.root);

	this.displayType = 'F';
	this.render();
}

WeatherItem.prototype.toggleTempType = function toggleTempType() {};

WeatherItem.prototype.render = function render() {
	var displayTemp = this.displayTemp,
	    displayType = this.displayType,
	    root = this.root,
	    description = this.description,
	    weatherType = this.weatherType;

	var html = '\n\n<div class="row">\n\t<div class="col s12 m6">\n\t\t<div class="card">\n\t\t\t<div class="card-image">\n\t\t\t\t<img src="' + images[weatherType] + '">\n\t\t\t\t<span class="card-title js-toggle-temp" style="color: black;">\n\t\t\t\t\tFOOBARR\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class="card-content">\n\t\t\t\t<h1>\n\t\t\t\t\t' + description + '\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n  \t\t';

	root.innerHTML = html;
};

function WeatherItemWithWind(weatherData, container) {
	WeatherItem.call(this, weatherData, container);
}

WeatherItemWithWind.prototype = Object.create(WeatherItem.prototype);

/*

const k = new WeatherItem();

1. create an empty object, like this one: {}
2. set the prototype property of our empty object {} to be the prototype of
	our WeatherItem 
3. return the empty object w/prototype attached
*/

/***/ })
/******/ ]);