import {WeatherItem} from './weatherItem_Constructor_ES6';

class WeatherForecast {
	constructor(data, container) {
		

		const root = document.createElement('div');
		const id = Math.floor(Math.random()*1000) + Date.now();
		root.classList.add('weatherItem-root-' + id);
		document.querySelector(container).appendChild(root);

		this.data = data;
		this.root = root;
		this.id = id;



		this.render();

		data.forEach(currentWeather => {
			new WeatherItem(currentWeather, `.weatherItem-root-${id} .js-wrapper`);
		});
	}
	render() {
		const {data, root, id} = this;

		root.innerHTML = `

<div class="container">
	<div class="row js-wrapper">
	</div>  
</div>

		`;

	}
}

export function weatherForecast(...args) {
	return new WeatherForecast(...args);
}