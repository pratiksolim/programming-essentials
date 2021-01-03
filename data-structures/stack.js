class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	push(item) {
		this.storage[this.size] = item;
		this.size++;
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}

		this.size--;
		const item = this.storage[this.size];
		delete this.storage[this.size];

		return item;
	}

	print() {
		const result = []
		for (let key in this.storage) {
			result.unshift(this.storage[key]);
		}

		return result;
	}
}

module.exports = Stack;