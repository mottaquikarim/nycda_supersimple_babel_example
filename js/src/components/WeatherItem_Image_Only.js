import {WeatherItem} from './weatherItem_Constructor_ES6';

class WeatherItemImageOnly extends WeatherItem {
	constructor(weatherData, container) {
		super(weatherData, container);
	}

	render() {
		const {
			root, 
			displayTemp, 
			displayType, 
			weatherType,
			currentImageIndex,
			description,
		} = this;

		const html = `
<div class="row">
	<div class="col s12 m6">
	  <div class="card" style="background-image: url(${this.renderCurrentImage()})">
	    <div class="card-content white-text">
			<span class="card-title js-toggle-temp" style="color: black;">
				${this.displayTemp(displayType)}
			</span>
			<span  style="color: black;">
		    	${description}
		    </span>
	  </div>
	</div>
</div>
		`;

		this.root.innerHTML = html;
	}
}

export function weatherItemImageOnly(...args) {
	return new WeatherItemImageOnly(...args);
}