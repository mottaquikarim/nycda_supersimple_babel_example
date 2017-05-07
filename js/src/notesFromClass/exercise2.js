const Cat = function({name}) {
    this.name = name;
};

Cat.prototype.speak = function() {
    return `meow I am ${this.name}`;
}

const belle = new Cat({name:'Annabelle Lee'})
const panda = new Cat({name: 'Pandora'});
/*

{}
{}.prototype = Cat.prototype
Cat(), with this = {}
=> return {}


*/

const Taq = {
    name: 'Mottaqui Karim',
    age: 26,
    occupation: 'chillin like a villain in ice cream fillin',
    greet: () => 'Hello, my name is Mottaqui Karim'
}

const Baba = {
    name: 'Babajide Kale',
    age: 25,
    occupation: 'handin out incompletes on hw',
    greet: () => 'yall just hatin, Drake is the GOAT'
}

const Person = function({name, age, occupation, greetString}) {
	this.name = name;
	this.age = age;
	this.occupation = occupation;
	this.greetString = greetString;
}

Person.prototype.greet = function() {
	return this.greetString;
}

Person.prototype.introduction = function() {
	return `Hello my name is ${this.name}, I am ${this.age} years old,`;
}

const Taq = new Person({
	name: 'Mottaqui Karim',
	age: 26,
	occupation: 'foobar',
	greetString: 'hello'
});

const Baba = new Person({
	name: 'Babajide Kale',
	age: 25,
	occupation: 'asdfasdfa',
	greetString: 'hasdfasdfaello'
});










