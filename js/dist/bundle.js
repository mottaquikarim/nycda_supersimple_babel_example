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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _locationServices = __webpack_require__(2);

var _weather = __webpack_require__(4);

var _giphy = __webpack_require__(5);

(0, _locationServices.getCurrentLocation)().then(function (results) {
    var _results$coords = results.coords,
        latitude = _results$coords.latitude,
        longitude = _results$coords.longitude;

    localStorage.setItem('savedCoords', JSON.stringify({ latitude: latitude, longitude: longitude }));

    return (0, _weather.weatherByLocation)(latitude, longitude);
}).then(function (weatherData) {
    var name = weatherData.name,
        weather = weatherData.weather;

    console.log(weatherData);
    var description = weather[0].description;


    console.log(weatherData);
    return (0, _giphy.searchByQuery)(description + name);
}).then(function (giphyData) {
    console.log(giphyData);
}).catch(function (e) {
    document.querySelector('#app').innerHTML = '<h1>' + e + '</h1>';
});

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weatherByZip = exports.weatherByLocation = undefined;

var _ajax = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// define some constants
var APIKEY = '1e519fc578fe456330a00b999dee641c';
var PROTOCOL = 'http://';
var APIVERSION = 2.5;
var BASEURL = 'api.openweathermap.org/data';
var APIKEYPROP = 'appid';

// for "private" functions that are not exported, we prepend them with a
// "_" character

// returns something like... http://api.openweathermap.org/data/[VERSION]
var _getBaseUrl = function _getBaseUrl() {
    return '' + PROTOCOL + BASEURL + '/' + APIVERSION + '/';
};

// ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
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

// get weather?lat=...&lon=...
var weatherByLocation = exports.weatherByLocation = function weatherByLocation(lat, lon) {
    return _apiEndpoint({ lat: lat, lon: lon }, 'weather');
};

// get weather?zip=...
var weatherByZip = exports.weatherByZip = function weatherByZip(zip) {
    return _apiEndpoint({ zip: zip }, 'weather');
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchByQuery = undefined;

var _ajax = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// define some constants
var APIKEY = 'dc6zaTOxFJmzC';
var PROTOCOL = 'https://';
var APIVERSION = 'v1';
var BASEURL = 'api.giphy.com';
var APIKEYPROP = 'api_key';

// for "private" functions that are not exported, we prepend them with a
// "_" character

// returns something like... http://api.openweathermap.org/data/[VERSION]
var _getBaseUrl = function _getBaseUrl() {
    return '' + PROTOCOL + BASEURL + '/' + APIVERSION + '/';
};

// ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
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

var searchByQuery = exports.searchByQuery = function searchByQuery(q) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return _apiEndpoint({ q: q, limit: limit }, 'gifs/search');
};

/***/ })
/******/ ]);