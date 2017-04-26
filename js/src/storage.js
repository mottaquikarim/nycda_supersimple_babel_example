const _key = 'todolist'
const _getItems = () => {
	const items = localStorage.getItem('_key');

	if (items === null) {
		return {
			todos: []
		};
	}
	else {
		return JSON.parse(items);
	}
};
const _setItems = (storage) => {
	localStorage.setItem('_key', JSON.stringify(storage));
}

export const setItem = (todo) => {
	console.log('HERE')
	// first, read what is inside the localStorage
	const storage = _getItems();
	console.log(storage);
	// checks to see if there are todos
	const {todos} = storage;

	todos.push(todo);

	_setItems(storage);
}

export const getTodos = () => {
	return _getItems().todos;
}
