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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.searchByQuery = undefined;

var _apiMapper = __webpack_require__(5);

var giphy = (0, _apiMapper.factory)('dc6zaTOxFJmzC', 'https://', 'v1', 'api.giphy.com', 'api_key');

var searchByQuery = exports.searchByQuery = function searchByQuery(q) {
	var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return giphy({ q: q, limit: limit }, 'gifs/search');
};

// import {GET} from '../ajax';

// // define some constants
// const APIKEY = 'dc6zaTOxFJmzC';
// const PROTOCOL = 'https://';
// const APIVERSION = 'v1';
// const BASEURL = 'api.giphy.com';
// const APIKEYPROP = 'api_key';

// // for "private" functions that are not exported, we prepend them with a
// // "_" character

// // returns something like... http://api.openweathermap.org/data/[VERSION]
// const _getBaseUrl = () => `${PROTOCOL}${BASEURL}/${APIVERSION}/`;

// // ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
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

// export const searchByQuery = (q, limit = 1) => _apiEndpoint({q, limit}, 'gifs/search');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.callWeatherAPI = exports.forecastByCity = exports.weatherByCity = exports.weatherByZip = exports.weatherByLocation = undefined;

var _apiMapper = __webpack_require__(5);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
    return new Promise(function (resolve, reject) {
        var onSuccess = function onSuccess(coords) {
            resolve(coords);
        }; // onSuccess
        var onFail = function onFail(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    reject("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    reject("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    reject("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    reject("An unknown error occurred.");
                    break;
                default:
                    reject("An unknown error has occurred");
            }
        }; // onFail

        navigator.geolocation.getCurrentPosition(onSuccess, onFail);
    });
}; // getCurrentLocation

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _locationServices = __webpack_require__(3);

var _weather = __webpack_require__(2);

var _giphy = __webpack_require__(1);

var getLocation = (0, _locationServices.getCurrentLocation)();
var getWeather = getLocation.then(function (results) {
    var _ref = results.coords || {},
        latitude = _ref.latitude,
        longitude = _ref.longitude;

    localStorage.setItem('savedCoords', JSON.stringify({ latitude: latitude, longitude: longitude }));

    return (0, _weather.weatherByLocation)(latitude, longitude);
});
var getGiphy = getWeather.then(function (weatherData) {
    var name = weatherData.name,
        weather = weatherData.weather;

    console.log(weatherData);
    var description = weather[0].description;


    console.log(weatherData);
    return (0, _giphy.searchByQuery)(description + name);
});

Promise.all([getLocation, getWeather, getGiphy]).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        location = _ref3[0],
        weather = _ref3[1],
        giphy = _ref3[2];

    console.log(location, weather, giphy);
}).catch(function (e) {
    document.querySelector('#app').innerHTML = '<h1>' + e + '</h1>';
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.factory = factory;

var _ajax = __webpack_require__(0);

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

/***/ })
/******/ ]);