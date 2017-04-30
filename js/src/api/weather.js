import {GET} from '../ajax';

// define some constants
const APIKEY = '1e519fc578fe456330a00b999dee641c';
const PROTOCOL = 'http://';
const APIVERSION = 2.5;
const BASEURL = 'api.openweathermap.org/data'
const APIKEYPROP = 'appid';

// for "private" functions that are not exported, we prepend them with a
// "_" character

// returns something like... http://api.openweathermap.org/data/[VERSION]
const _getBaseUrl = () => `${PROTOCOL}${BASEURL}/${APIVERSION}/`;

// ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
const _getRequestParams = (params) => {
    const allParams = Object.assign({ [APIKEYPROP]: APIKEY }, params);
    const paramStr = Object.keys(allParams).map((currentKey) => {
        return `${currentKey}=${allParams[currentKey]}`;
    }).join('&');
    return '?' + paramStr;
}

// define api endpoints
const _apiEndpoint = (params, endpointName) => {
    return GET(_getBaseUrl() + endpointName + _getRequestParams(params));
    // lat, lon
}

// get weather?lat=...&lon=...
export const weatherByLocation = (lat, lon) => _apiEndpoint({lat, lon}, 'weather');

// get weather?zip=...
export const weatherByZip = (zip) => _apiEndpoint({zip}, 'weather');










