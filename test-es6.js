class Furniture {
	constructor(material, color, width, height, depth, weight) {
		this.material = material;
		this.color = color;
		this.width = width;
		this.height = height;
		this.depth = depth;
		this.weight = weight;
	}
	getDimensions() {
		return `${this.width} x ${this.height} x ${this.depth}`;
	}
}

class Bed extends Furniture {
	constructor(size, hasHeadboard, material, color, width, height, depth, weight) {
		super(material, color, width, height, depth, weight)
		
		this.size = size;
		this.hasHeadboard = hasHeadboard;
	}
	getSize() {
		return `This bed is a ${this.size} sized bed`;
	}
	getDimensions() {
		return `${this.width} x ${this.depth}`;
	}
}

const b = new Bed('king', true, 'feathers', 'red', 10, 10, 10, 100);
console.log(b);
console.log(b.getDimensions());