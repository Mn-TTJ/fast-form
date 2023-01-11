const node = function (isEidtor) {
    this.isEidtor = isEidtor
    this.isDrogger = !isEidtor
    this.vNode = null
    this.props = []
    this.pointer = 0
    this.children = []
}

const nodes = new Map()

const tree = []

const addNode = (id, vNode, parent) => {
    nodes.set(id, vNode)
    let pNode
    if (!parent) pNode = tree
    else pNode = nodes.get(parent).children
    pNode.push(vNode)
    console.log(tree)
}

export { node, addNode }

