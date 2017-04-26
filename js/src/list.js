import {getTodos} from './storage';
const _renderList = () => {
	return `
<div class="container">
	<div class="row">
		${getTodos()
			.map(currentTodo => 
				`<div class="one column" style="border: 1px solid black;">${currentTodo}</div>`)
			.join('')
		}
	</div>
</div>
	`;
	return ['<div class="container">',
		'<div class="row">', 
		...getTodos().map((currentTodo) => {
			return `<div class="one column" style="border: 1px solid black;">${currentTodo}</div>`
		}), 
		'</div>',
		'</div>'].join('');
}

export default function List(wrapper) {
	wrapper.classList.remove('loading');
	wrapper.innerHTML = _renderList();
}