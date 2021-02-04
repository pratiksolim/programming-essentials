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
		if (currNode === null) {
			console.log(currNode)
			this.preOrderTraversal(currNode.leftChild)
			this.preOrderTraversal(currNode.rightChild)
		}
	}

	inOrderTraversal(currNode) {
		if (currNode !== null) {
			this.inOrderTraversal(currNode.leftChild)
			console.log(currNode)
			this.inOrderTraversal(currNode.rightChild)
		}
	}

	postOrderTraversal(currNode) {
		if (currNode !== null) {
			this.postOrderTraversal(currNode.leftChild)
			this.postOrderTraversal(currNode.rightChild)
			console.log(currNode)
		}
	}

	searchRecursive (value, currNode = this.root) {
		if (currNode === null) {
			return null
		}

		if (value === currNode.val) {
			return currNode
		}

		if (val < currNode.val) {
			return this.searchRecursive(val, currNode.leftChild)
		} else {
			return this.searchRecursive(val, currNode.rightChild)
		}
	}

	delete (value, currNode = this.root) {
		if (currNode === null) {
			return false
		}

		let parentNode
		while (currNode && currNode.val !== value) {
			parentNode = currNode

			if (value < currNode.val) {
				currNode = currNode.leftChild
			} else {
				currNode = currNode.rightChild
			}
		}

		if (currNode === null) {
			return false
		}

		if (currNode.leftChild === null && currNode.rightChild === null) {
			if (currNode.val === this.root.val) {
				this.root = null

				return true
			}

			if (currNode.val < parentNode.val) {
				parentNode.leftChild = null

				return true
			}

			parentNode.rightChild = null

			return true
		}

		if (currNode.leftChild === null) {
			if (currNode.val === this.root.val) {
				this.root = currNode.rightChild

				return true
			}

			if (currNode.val < parentNode.val) {
				parentNode.leftChild = currNode.rightChild

				return true
			}

			parentNode.rightChild = currNode.rightChild

			return true
		}

		if (currNode.rightChild === null) {
			if (currNode.val === this.root.val) {
				this.root = currNode.leftChild

				return true
			}

			if (currNode.val < parentNode.val) {
				parentNode.leftChild = currNode.leftChild

				return true
			}

			parentNode.rightChild = currNode.leftChild

			return true
		}

		let minRight = currNode.rightChild
		while (minRight.leftChild !== null) {
			minRight = minRight.leftChild
		}

		const temp = minRight.val
		this.delete(this.root, minRight.val)
		currNode.val = temp
	}
}

module.exports = BinarySearchTree
