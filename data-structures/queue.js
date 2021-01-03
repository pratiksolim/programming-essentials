class Queue {
	constructor() {
		this.storage = {};
		this.head = 0;
		this.tail = 0;
	}

	enQueue(item) {
		this.storage[this.tail] = item;
		this.tail++;
	}

	deQueue() {
		const size = this.tail - this.head;

		if (size <= 0) {
			return undefined;
		}

		const item = this.storage[this.head];
		delete this.storage[this.head];

		this.head++;

		if (this.head === this.tail) {
			this.head = 0;
			this.tail = 0;
		}

		return item;
	}

	size() {
		return this.tail - this.head;
	}

	print() {
		const result = []
		for (let key in this.storage) {
			result.push(this.storage[key]);
		}

		return result;
	}
}

module.exports = Queue;