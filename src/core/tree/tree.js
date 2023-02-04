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

    delChild: (node, parent, slot = 'default') => {
        const children = parent ? parent.slots[slot] : tree
        const index = children.findIndex((ele) => {
            if (ele === node) return true
            return false
        })
        if (index != -1) children.splice(index, 1)
    },

    setParentNode: (node) => {
        parentNode = node
    },

    getParentNode: () => parentNode,

    getComponentTree: () => {
        const componentTree = new Array()

        const flat = (origin, result) => {
            origin.forEach(element => {
                const children = new Array()
                Object.values(element.slots).forEach((ele) => {
                    if (ele.length != 0) flat(ele, children)
                })
                result.push({ id: element.id, vNode: element.vNode, children })
            });
        }

        flat(tree, componentTree)

        return componentTree
    }
}

export { treeNode, treeMethod }

