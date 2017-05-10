const required = (type) => {throw new Error(`variable must be type ${type}`)};

function Furniture(material, color, width, height, depth, weight) {
	this.material = material;
	this.color = color;
	this.width = width;
	this.height = height;
	this.depth = depth;
	this.weight = weight;
}


Furniture.prototype.getDimensions = function getDimensions() {
	return `${this.width} x ${this.height} x ${this.depth}`;
};

function Bed(size, hasHeadboard, material, color, width, height, depth, weight) {
	Furniture.call(this, material, color, width, height, depth, weight);

	this.size = size;
	this.hasHeadboard = hasHeadboard;
}

Bed.prototype = Object.create(Furniture.prototype);

Bed.prototype.getSize = function getSize() {
	return `This bed is a ${this.size} sized bed`;
}

const b = new Bed('king', true, 'feathers', 'red', 10, 10, 10, 100);
console.log(b);
console.log(b.getDimensions());


// const f = new Furniture('wood', 'brown', 2, 2, 4, 0);
// console.log(f)




