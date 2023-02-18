const treeNode = function (id, vNode, props) {
    this.id = id
    this.vNode = vNode
    this.props = props
    this.slots = {
        default: []
    }
    this.parent = null
    this.reBuild = null
    this.clear = null
}

let parentNode = null

let tree = []

const treeMethod = {
    pushNode: (vNode, parent, slot) => {
        if (!parent) tree.push(vNode)
        else {
            if (!parent.slots[slot]) parent.slots[slot] = new Array()
            parent.slots[slot].push(vNode)
            vNode.parent = parent
        }
    },

    // addNode: (vNode, parent, slot, index) => {
    //     if (!parent) tree.push(vNode)
    //     else {
    //         if (!parent.slots[slot]) parent.slots[slot] = new Array()
    //         parent.slots[slot].splice(index, 0, vNode)
    //         vNode.parent = parent
    //     }
    //     vNode.reBuild = reBuild
    // },

    delChild: (node, parent, slot = 'default') => {
        const children = parent ? parent.slots[slot] : tree
        const index = children.findIndex((ele) => {
            if (ele === node) return true
            return false
        })
        if (index != -1) children.splice(index, 1)
        node.parent = null
    },

    clearChildren: (parent) => {
        if (!parent) {
            while (tree.length > 0) {
                tree.pop()
            }
        }
        else {
            while (parent.slots.default.length != 0) {
                parent.slots.default.pop()
            }
        }
    },

    reSortChild: (children, attr, sortArr) => {
        sortArr.forEach((key, index) => {
            for (let i = index; i < children.length; i++) {
                if (children[i].props[attr] == key) {
                    [children[i], children[index]] = [children[index], children[i]]
                    break
                }
            }
        })
        while (children.length > sortArr.length) {
            children.pop()
        }
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
    },

    toJson: () => JSON.stringify(tree, (key, value) => {
        if (key == 'id' || key == 'parent' || key == 'reBuild' || key == 'clear') return undefined
        return value
    }, 4),

    getTree: () => tree
}

export { treeNode, treeMethod, tree }

