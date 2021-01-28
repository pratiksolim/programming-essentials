const LinkedList = require('../linked-list/linkedList')
const Node = require('../linked-list/node')

class Graph {
	constructor (vertices) {
		this.vertices = vertices
		this.list = []

		for (let i = 0; i < vertices; i++) {
			let temp = new LinkedList()
			this.list.push(temp)
		}
	}

	addEdge (source, dest) {
		if (source >= this.vertices || dest >= this.vertices) {
			return
		}

		this.list[source].insertAtHead(dest)
	}

	print () {
		for (let i = 0; i < this.vertices; i++) {
			console.log(`${i} => `, this.list[i].printList())
		}
	}
}

module.exports = Graph