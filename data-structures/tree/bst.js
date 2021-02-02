class Node {
	constructor (value) {
		this.val = value
		this.leftChild = null
		this.rightChild = null
	}
}

class BinarySearchTree {
	constructor(rootValue) {
			this.root = new Node(rootValue);
	}
}

module.exports = BinarySearchTree
