function bfsTraversal(g) {
	const verticesCount = g.vertices
	const visitedPath = {}
	let traversalPath = ''

	for (let i = 0; i < verticesCount; i++) {
		const vertexLink = g.list[i]

		if (!visitedPath[i]) {
			visitedPath[i] = true
			traversalPath = traversalPath.concat(i)
		}

		let tempHead = vertexLink.getHead()
		while (tempHead !== null) {
			if (!visitedPath[tempHead.data]) {
				visitedPath[tempHead.data] = true
				traversalPath = traversalPath.concat(tempHead.data)
			}
			tempHead = tempHead.nextElement
		}
	}

	return traversalPath
}

module.exports = bfsTraversal