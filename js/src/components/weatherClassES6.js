export class WeatherItem {
	constructor(weatherData, container) {
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
	toggleTempType() {

	}
	render() {
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
}


class WeatherItemWithWind extends WeatherItem {
	constructor(weatherData, container) {
		super(weatherData, container)
		
	}
	foobar() {

	}
}
