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