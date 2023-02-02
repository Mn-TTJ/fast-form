const treeNode = function (id, vNode, props) {
    this.id = id
    this.vNode = vNode
    this.props = props
    this.slots = {
        default: []
    }
}

let parentNode = null

let tree = []

const treeMethod = {
    pushNode: (vNode, parent, slot) => {
        if (!parent) tree.push(vNode)
        else {
            if (!parent.slots[slot]) parent.slots[slot] = new Array()
            parent.slots[slot].push(vNode)
        }
    },

    addNode: (vNode, parent, slot, index) => {
        if (!parent.slots[slot]) parent.slots[slot] = new Array()
        parent.slots[slot].splice(index, 0, vNode)
    },

    setParentNode: (node) => {
        parentNode = node
    },

    getParentNode: () => parentNode
}

export { treeNode, treeMethod }

