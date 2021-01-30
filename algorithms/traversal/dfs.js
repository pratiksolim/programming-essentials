const Stack = require('../../data-structures/stack')

function dfsHelper (g, i, visited, traversalPath) {
  let stk = new Stack(g.vertices)
  stk.push(i)
  visited[i] = true

  while(!stk.isEmpty()) {
    const ele = stk.pop()
    traversalPath = traversalPath.concat(ele)

    let tempHead = g.list[ele].getHead()

    while (tempHead != null) {
      if (!visited[tempHead.data]) {
        stk.push(tempHead.data)
        visited[tempHead.data] = true
      }
      tempHead = tempHead.nextElement
    }
  }
}

function dfsTraversal(g) {
  var traversalPath = ''
  var visited = {}

  for (let i=0; i<g.vertices; i++) {
    if (!visited[i]) {
      dfsHelper(g, i, visited, traversalPath)
    }
  }

  return traversalPath
}

module.exports = dfsTraversal