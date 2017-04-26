import {setItem} from './storage';
const _onBtnSubmit = () => {
	document.querySelector('.js-compose-submit')
		.addEventListener('click', (e) => {
			const todoItem = document.querySelector('.js-compose-todo').value;
			setItem(todoItem);
			location.hash = '#/list'
		});
}

const _renderInput = () => {
	const html = `
<div>
	<input type="text" class="js-compose-todo" />
	<button type="submit" class="js-compose-submit">Submit</button>
</div>
	`;

	return html;
}

export default function Compose(wrapper) {
	wrapper.classList.remove('loading');
	wrapper.innerHTML = _renderInput();

	_onBtnSubmit();
}