import {forecastByCity} from './api/weather';
import {WeatherItem} from './components/weatherItemClassES5';

forecastByCity('nyc, usa').then(data => {
    console.log(data)
    // data.list.forEach((dataItem) => {
    //     const k = new WeatherItem(dataItem, '#app');
    //     console.log(k)
    // })

    const k = new WeatherItem(data.list[0], '#app');
    k.foo = 1;
    k.bar = function bar() {
        console.log('k is here, lol')
    }
    const l = new WeatherItem(data.list[1], '#app');
    l.foo = 2;
    const m = new WeatherItem(data.list[2], '#app');

    WeatherItem.prototype.bar = function baz() {
        console.log('here')
    }
    console.log(k,l,m)
});