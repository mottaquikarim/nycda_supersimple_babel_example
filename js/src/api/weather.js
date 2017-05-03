import {factory} from './apiMapper';

const weather = factory(
	'1e519fc578fe456330a00b999dee641c',
	'http://',
	2.5,
	'api.openweathermap.org/data',
	'appid'
);

export const weatherByLocation = (lat, lon) => weather({lat, lon}, 'weather');
export const weatherByZip = (zip) => weather({zip}, 'weather');
export const weatherByCity = (q) => weather({q}, 'weather');
export const forecastByCity = (q) => weather({q}, 'forecast');
export const callWeatherAPI = (params, endpointName) => weather(params, endpointName);







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





