const images = {
	'clouds': 'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif'
}

const kToC = (temp) => temp - 273.15;
const cToF = (temp) => 1.8 * temp + 32;

export function weatherItem(weatherData, container) {
	const {main, wind, weather} = weatherData

	const {temp_max, temp_min, humidity} = main;
	const {speed} = wind;
	const {description} = weather[0];
	const weatherType = weather[0].main.toLowerCase();

	let displayType = 'F';


	console.log(temp_max, temp_min, humidity, speed, description)
	console.log(weatherData);

	const html = `
<div class="row">
	<div class="col s12 m6">
		<div class="card">
			<div class="card-image">
				<img src="${images[weatherType]}">
				<span class="card-title js-toggle-temp" style="color: black;">
					${displayTemp(displayType)}
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

  	document.querySelector(container).innerHTML = html;

  	const tempContainer = document.querySelector('.js-toggle-temp');
  	tempContainer.addEventListener('click', (e) => {
  		displayType = (displayType === 'F') ? 'C' : 'F';  		
  		tempContainer.innerHTML = displayTemp(displayType)

  	});

  	function displayTemp(displayType) {
		
  		const shouldConvertToCelcius = (displayType === 'C');

  		let maxTemp;
  		let minTemp;
  		let label;

  		if (shouldConvertToCelcius) {
  			maxTemp = Math.floor(kToC(temp_max));
  			minTemp = Math.floor(kToC(temp_min));
  			label = 'C';
  		}
  		else {
  			maxTemp = Math.floor(cToF(kToC(temp_max)));
  			minTemp = Math.floor(cToF(kToC(temp_min)));
  			label = 'F';
  		}

  		return `${maxTemp} &deg;${label}/ ${minTemp} &deg;${label}`

  	}

}

/*
  		if (tempContainer.classList.contains('js-f')) {
	  		tempContainer.innerHTML = `
${Math.floor(kToC(temp_max))} &deg;C/ ${Math.floor(kToC(temp_min))} &deg;C
	  		`;
	  		tempContainer.classList.remove('js-f');
	  		tempContainer.classList.add('js-c');
  		}
  		else {
  			tempContainer.innerHTML = `
${Math.floor(cToF(kToC(temp_max)))} &deg;F/ ${Math.floor(cToF(kToC(temp_min)))} &deg;F
  			`;
  			tempContainer.classList.remove('js-c');
	  		tempContainer.classList.add('js-f');
  		}
*/

/*
const contClasses = tempContainer.classList;
  		const shouldConvertToCelcius = contClasses.contains('js-f');

  		let maxTemp;
  		let minTemp;
  		let label;

  		if (shouldConvertToCelcius) {
  			maxTemp = Math.floor(kToC(temp_max));
  			minTemp = Math.floor(kToC(temp_min));
  			label = 'C';
  			contClasses.remove('js-f');
	  		contClasses.add('js-c');
  		}
  		else {
  			maxTemp = Math.floor(cToF(kToC(temp_max)));
  			minTemp = Math.floor(cToF(kToC(temp_min)));
  			label = 'F';
  			contClasses.remove('js-c');
	  		contClasses.add('js-f');
  		}

  		tempContainer.innerHTML = `${maxTemp} &deg;${label}/ ${minTemp} &deg;${label}`

*/

/*

  		// if (displayType === 'F') {
  		// 	displayType = 'C';
  		// }
  		// else {
  		// 	displayType = 'F';
  		// }
*/



