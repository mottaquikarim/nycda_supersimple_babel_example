const Person = (() => {
	function Person({name, age}, foobar) {
		this.name = name;
		this.age = age;
		this.foobar = foobar;
	}
	Person.prototype.greeting = function() {
		return 'Hello my name is' + this.name;
	}
	return function(...args) {
		return new Person(...args);
	}
})();

const k = Person({name:'taq'})