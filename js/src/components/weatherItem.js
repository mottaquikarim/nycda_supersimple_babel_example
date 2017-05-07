const images = {
	'rain': [
    'https://media.giphy.com/media/mno6BJfy8USic/giphy.gif',
    'https://media.giphy.com/media/gRnSZSRzOJeG4/giphy.gif',
    'https://media.giphy.com/media/oSaLJmbUgZQm4/200w_d.gif',
    'https://media.giphy.com/media/3oriO1WJifFDP2gRYA/giphy-downsized.gif'
  ]
}

const kToC = (temp) => temp - 273.15;
const cToF = (temp) => 1.8 * temp + 32;

export function weatherItem(weatherData, container) {
	const {main, wind, weather} = weatherData

	const {temp_max, temp_min, humidity} = main;
	const {speed} = wind;
	const {description} = weather[0];
	const weatherType = weather[0].main.toLowerCase();

	const root = document.createElement('div');
	const id = Math.floor(Math.random());
	root.classList.add('weatherItem-root-' + id);
	document.querySelector(container).appendChild(root);

	let displayType = 'F';
  let currentImageIndex = 0;
	render();

	root.addEventListener('click', (e) => {
		const {target} = e;
		if (target.classList.contains('js-toggle-temp') || target.closest('.js-toggle-temp')) {
			toggleTempType();
		}
    if (target.classList.contains('js-main-image') || target.closest('.js-main-image')) {
      updateImageIndex();
    }
		render();
	});


	function toggleTempType() {
		displayType = (displayType === 'F') ? 'C' : 'F';  		

	}

  function updateImageIndex() {
    // Alternative "clever" way
    // currentImageIndex = ++currentImageIndex % images[weatherType].length;

    // clearer way of approaching
    currentImageIndex++;

    if (currentImageIndex === images[weatherType].length) {
      currentImageIndex = 0;
    }
  }

  	function render() {
  		const html = `
<div class="row">
	<div class="col s12 m6">
		<div class="card">
			<div class="card-image">
				<img class="js-main-image" src="${images[weatherType][currentImageIndex]}">
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

  		root.innerHTML = html;
  	}

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

  		return `<strong>${maxTemp} &deg;${label}</strong>/ <em>${minTemp} &deg;${label}</em>`

  	}

}