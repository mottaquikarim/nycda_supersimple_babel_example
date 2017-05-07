function Person({name}) {
	this.name = name;
}
Person.prototype.greeting = function() {
	return 'Hello my name is' + this.name;
}
const p = new Person({name: 'foo'});