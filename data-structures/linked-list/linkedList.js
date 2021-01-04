const Node = require('./node.js')

module.exports = class LinkedList {
	constructor() {
		this.head = null
	}

	insertAtHead (newData) {
		let tempNode = new Node(newData)
		tempNode.nextElement = this.head
		this.head = tempNode
		return this
	}

	insertAtTail (newData) {
		let tempNode = new Node(newData)

		if (this.isEmpty()) {
			this.head = tempNode
			return this
		}

		let currHead = this.head
		while (currHead.nextElement !== null) {
			currHead = currHead.nextElement
		}

		currHead.nextElement = tempNode
		return this
	}

	insertAtNth (newData, position) {
		const tempNode = new Node(newData)
		let currentNode = this.head
		let prevNode = null

		let i = 0
		while (i < position) {
			prevNode = currentNode
			currentNode = currentNode.nextElement
			if (currentNode === null) {
				break;
			}
			i++
		}

		tempNode.nextElement = currentNode
		prevNode.nextElement = tempNode

		return this
	}

	deleteAtHead () {
		if (this.head == null) {
			return this
		}

		const firstNode = this.head
		this.head = firstNode.nextElement

		return this
	}

	deleteVal (val) {
		if (this.isEmpty()) {
			return this
		}

		let currNode = this.head
		if (currNode.data === value) {
			this.head = currNode.nextElement
			return this
		}

		while (currNode.nextElement !== null) {
			if (currNode.nextElement.data === val) {
				currNode.nextElement = currNode.nextElement.nextElement
				return this
			}

			currNode = currNode.nextElement
		}

		return this
	}

	deleteAtTail () {
		if (this.isEmpty()) {
			return this
		}

		let currNode = this.head

		if (currNode.nextElement === null) {
			this.deleteAtHead()
			return this
		}

		while (currNode.nextElement.nextElement !== null) {
			currNode = currNode.nextElement
		}

		currNode.nextElement = null
		return this
	}

	isEmpty () {
		return (this.head == null)
	}

	printList () {
		if (this.isEmpty()) {
			console.log("Empty List")
			return false
		}

		let temp = this.head
		while (temp != null) {
			process.stdout.write(String(temp.data))
			process.stdout.write(" -> ")
			temp = temp.nextElement
		}
		console.log("null")
		return true
	}

	getHead () {
		return this.head
	}
	getListStr () {
		if (this.isEmpty()) {
			console.log("Empty List")
			return "null"
		}

		let st = ""
		let temp = this.head

		while (temp != null) {
			st += String(temp.data)
			st += " -> "
			temp = temp.nextElement
		}

		st += "null"
		return st
	}
}