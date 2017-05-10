import {WeatherItem} from './weatherItem_Constructor_ES6';
const GoogleMapsLoader = require('google-maps'); // only for common js environments
GoogleMapsLoader.KEY = 'AIzaSyCNdt24CX1sqRWFDH1XwliQoxZ1aWxkafg';

class WeatherItemWithMap extends WeatherItem {
	constructor(weatherData, container) {
		super(weatherData, container);

		document.querySelector(container).style.height = '500px'
		GoogleMapsLoader.load((google) => {
			const mapContainer = this.root.querySelector('.js-google-maps');
			new google.maps.Map(mapContainer, {
	          center: {lat: -34.397, lng: 150.644},
	          zoom: 16
	        });
		});

		GoogleMapsLoader.onLoad(function(google) {
			console.log('I just loaded google maps api');
		});
	}
	// render() {
	// 	this.root.innerHTML = this.renderBody(`
	// 		<div class="js-google-maps" style="height: 400px;"></div>
	// 	`);
	// }
	render() {
		const {
			root, 
			displayTemp, 
			displayType, 
			weatherType,
			currentImageIndex,
			description,
		} = this;


	  		this.root.innerHTML = `
		}
	<div class="row">
		<div class="col s12 m6">
			<div class="card">
				<div class="card-image">
					<div class="js-google-maps" style="height: 400px;"></div>
					<span class="card-title js-toggle-temp" style="color: black;">
						${this.displayTemp(displayType)}
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
	}

}

export function weatherItemWithMap(...args) {
	return new WeatherItemWithMap(...args);
}