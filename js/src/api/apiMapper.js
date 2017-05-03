import {GET} from '../ajax';

export function factory(APIKEY, PROTOCOL, APIVERSION, BASEURL, APIKEYPROP ) {
	// returns something like... http://api.openweathermap.org/data/[VERSION]
	const _getBaseUrl = () => `${PROTOCOL}${BASEURL}/${APIVERSION}/`;

	// ?lat=35 & lon=139 & appid=b1b15e88fa797225412429c1c50c122a1
	/*
	 * @function _getRequestParams
	 * @argument {params} an object containing API params to send
	 * @desc - takes the params of form: 
	 *			{ foo: 1, bar: 'true' } and converts to:
	 *			?foo=1&bar=true
	 */
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

	return _apiEndpoint;
}
