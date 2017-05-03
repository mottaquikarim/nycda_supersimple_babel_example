import {factory} from './apiMapper';

const giphy = factory(
	'dc6zaTOxFJmzC',
	'https://',
	'v1',
	'api.giphy.com',
	'api_key'
);

export const searchByQuery = (q, limit = 1) => giphy({q, limit}, 'gifs/search');


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
