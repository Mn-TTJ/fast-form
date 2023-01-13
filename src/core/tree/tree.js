const node = function (isEidtor) {
    /*
    组件必须附带一个编辑框，因此树由编辑框和拖拽目标框组成，
    vNode记录编辑框的组件，props记录组件的参数，pointer用0/1记录编辑框和组件的父子关系
    */
    this.isEidtor = isEidtor
    this.isDrogger = !isEidtor
    this.vNode = null
    this.props = []
    this.pointer = 0
    this.children = []
}

// 所有的拖拽目标框记录于map在于添加时找到父节点，
// 所有编辑框记录于map在于点击编辑框时快速定位，方便于设置props
const nodes = new Map()

const tree = []

const addNode = (id, vNode, parent) => {
    nodes.set(id, vNode)
    let pNode
    if (!parent) pNode = tree
    else pNode = nodes.get(parent).children
    pNode.push(vNode)
}

const getComponentTree = () => {
    const componentTree = []

    const getTree = (branch, components) => {
        branch.forEach(element => {
            if (element.isEidtor) {
                const leaf = {
                    vNode: element.vNode,
                    children: new Array()
                }
                components.push(leaf)
                getTree(element.children, leaf.children)
            }
            else {
                getTree(element.children, components)
            }
        });
    }

    getTree(tree, componentTree)

    return componentTree
}

export { node, addNode, getComponentTree }

