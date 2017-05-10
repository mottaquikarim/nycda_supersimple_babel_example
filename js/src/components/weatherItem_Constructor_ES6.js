const images = {
	'rain': [
	    'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif',
	    'https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif',
	    'https://media.giphy.com/media/oSaLJmbUgZQm4/200w_d.gif',
	    'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif'
	  ],
	 'clouds': [
	    'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif',
	    'https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif',
	    'https://media.giphy.com/media/oSaLJmbUgZQm4/200w_d.gif',
	    'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif'
	  ],
}

const kToC = (temp) => temp - 273.15;
const cToF = (temp) => 1.8 * temp + 32;

export class WeatherItem {
	constructor(weatherData, container) {
		const {main, wind, weather} = weatherData;

		const {temp_max, temp_min, humidity} = main;
		const {speed} = wind;
		const {description} = weather[0];
		const weatherType = weather[0].main.toLowerCase();

		const root = document.createElement('div');
		const id = Math.floor(Math.random()*1000) + Date.now();
		root.classList.add('weatherItem-root-' + id);
		console.log(container, weatherType)
		document.querySelector(container).appendChild(root);

		this.temp_max = temp_max;
		this.temp_min = temp_min;
		this.humidity = humidity;
		this.speed = speed;
		this.description = description;
		this.weatherType = weatherType;
		this.displayType = 'F';
		this.currentImageIndex = 0;
		this.root = root;


		this.render();
		this.bindEvents();
	}
	renderBody(extra = '') {
		const {
			root, 
			displayTemp, 
			displayType, 
			weatherType,
			currentImageIndex,
			description,
		} = this;

	  		return `
	<div class="row">
		<div class="col s12 m6">
			<div class="card">
				<div class="card-image">
					<img class="js-main-image" src="${this.renderCurrentImage()}">
					<span class="card-title js-toggle-temp" style="color: black;">
						${this.displayTemp(displayType)}
					</span>
				</div>
				<div class="card-content">
					<h1>
						${description}
					</h1>
				</div>
				${extra}
			</div>
		</div>
	</div>
	  		`;		
	}
	render() {
		this.root.innerHTML = this.renderBody();
	}
	bindEvents() {
		const {
			root, 
			toggleTempType, 
			updateImageIndex, 
			render 
		} = this;

		root.addEventListener('click', (e) => {
			const {target} = e;
			if (target.classList.contains('js-toggle-temp') || target.closest('.js-toggle-temp')) {
				this.toggleTempType();
			}
		    if (target.classList.contains('js-main-image') || target.closest('.js-main-image')) {
		      this.updateImageIndex();
		    }
			this.render();
		});		
	}
	renderCurrentImage() {
		const weatherType = images[this.weatherType];
		if (typeof weatherType === "undefined" ) return "https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif";
		return images[this.weatherType][this.currentImageIndex];
	}
	toggleTempType() {
		this.displayType = (this.displayType === 'F') ? 'C' : 'F';
	}
	updateImageIndex() {
		// Alternative "clever" way
		// currentImageIndex = ++currentImageIndex % images[weatherType].length;


		// clearer way of approaching
		this.currentImageIndex++;

		if (this.currentImageIndex === images[this.weatherType].length) {
		  this.currentImageIndex = 0;
		}		
	}
	displayTemp(displayType) {
		const shouldConvertToCelcius = (displayType === 'C');

		let maxTemp;
		let minTemp;
		let label;

		if (shouldConvertToCelcius) {
			console.log(this)
			maxTemp = Math.floor(kToC(this.temp_max));
			minTemp = Math.floor(kToC(this.temp_min));
			label = 'C';
		}
		else {
			console.log(this)
			maxTemp = Math.floor(cToF(kToC(this.temp_max)));
			minTemp = Math.floor(cToF(kToC(this.temp_min)));
			label = 'F';
		}

		return `<strong>${maxTemp} &deg;${label}</strong>/ <em>${minTemp} &deg;${label}</em>`

	}
}

export function weatherItem(...args) {
	return new WeatherItem(...args);
}






