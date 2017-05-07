import {forecastByCity} from './api/weather';
import {weatherItem} from './components/weatherItem_Constructor';

forecastByCity('nyc, usa').then(data => {
    console.log(data)
    data.list.forEach((dataItem, index) => {
    	if (index === 0) {
    		weatherItem(dataItem, '#app');
    	}
        
    })
});