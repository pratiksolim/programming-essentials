class Node {
	constructor (value) {
		this.val = value
		this.leftChild = null
		this.rightChild = null
	}
}

class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue)
	}

	insert(val) {
		if (this.root === null) {
			this.root = new Node(val)
			return
		}

		const currNode = this.root
		let parent
		while (currNode) {
			parent = currNode

			if (val < currNode.val) {
				currNode = currNode.leftChild
			} else {
				currNode = currNode.rightChild
			}
		}

		if (val < parent.val) {
			parent.leftChild = new Node(val)
		} else {
			parent.rightChild = new Node(val)
		}
	}

	preOrderTraversal(currNode) {
		if (currNode !== null) {
			console.log(currNode)
			this.preOrderTraversal(currNode.leftChild)
			this.preOrderTraversal(currNode.rightChild)
		}
	}
}

module.exports = BinarySearchTree
