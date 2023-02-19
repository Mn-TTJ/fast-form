import { watch, resolveComponent, h, render } from "vue";
import { treeMethod } from "@/core/tree/tree";

export default function (root) {
    const tree = treeMethod.getTree()
    const map = new Map()

    const getComponents = (components) => {
        components.forEach(element => {
            const name = element.vNode
            if (!map.has(name)) map.set(name, resolveComponent(name))
            if (element.slots.default && element.slots.default.length != 0) getComponents(element.slots.default)
        });
    }

    getComponents(tree)

    const init = watch(root, () => {
        const getNodes = (target) => {
            const nodes = new Array()
            target.forEach((element) => {
                let children = []
                if (element.slots.default && element.slots.default.length > 0) children = getNodes(element.slots.default)
                const node = h(map.get(element.vNode), element.props, children)
                nodes.push(node)
            })
            return nodes
        }

        const targetNodes = getNodes(tree)

        render(h('div', { class: 'preview-render' }, targetNodes), root.value)
        init()
    })
}