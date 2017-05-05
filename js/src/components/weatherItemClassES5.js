const images = {
	'clouds': 'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif'
}

const kToC = (temp) => temp - 273.15;
const cToF = (temp) => 1.8 * temp + 32;

export function WeatherItem(weatherData, container) {
	const {main, wind, weather} = weatherData;

	this.temp_max = main.temp_max;
	this.temp_min = main.temp_min;
	this.humidity = main.humidity;

	this.speed = wind.speed;
	this.description = weather[0].description;
	this.weatherType = weather[0].main.toLowerCase();

	this.root = document.createElement('div');
	const id = Math.floor(Math.random());
	this.root.classList.add('weatherItem-root-' + id);
	document.querySelector(container).appendChild(this.root);

	this.displayType = 'F';
	this.render();

}

WeatherItem.prototype.toggleTempType = function toggleTempType() {}

WeatherItem.prototype.render = function render() {
	const {displayTemp, displayType, root, description, weatherType} = this;
	const html = `

<div class="row">
	<div class="col s12 m6">
		<div class="card">
			<div class="card-image">
				<img src="${images[weatherType]}">
				<span class="card-title js-toggle-temp" style="color: black;">
					FOOBARR
				</span>
			</div>
			<div class="card-content">
				<h1>
					${description}
				</h1>
			</div>
		</div>
	</div>
</div>
  		`;

  		root.innerHTML = html;
}

function WeatherItemWithWind(weatherData, container) {
	WeatherItem.call(this, weatherData, container )
}

WeatherItemWithWind.prototype = Object.create(WeatherItem.prototype);

/*

const k = new WeatherItem();

1. create an empty object, like this one: {}
2. set the prototype property of our empty object {} to be the prototype of
	our WeatherItem 
3. return the empty object w/prototype attached
*/