import { watch, resolveComponent, h, render, ref } from "vue";
import { treeMethod } from "@/core/tree/tree";
import { store } from "@/core/store/store";
import { isForm, toSlot } from "@/core/config/toSlots/toSlots";

export default function (root) {
    const tree = treeMethod.getTree()
    let map = new Map()
    const css = ref('')

    const getComponents = (components) => {
        components.forEach(element => {
            const name = element.vNode
            if (!map.has(name)) map.set(name, resolveComponent(name))
            if (element.slots.default && element.slots.default.length != 0) getComponents(element.slots.default)
        });
    }

    getComponents(tree)

    if (store.horizontal > 0 || store.vertical > 0) {
        css.value = `<style>.preview-space-lock{margin:${store.vertical}px ${store.horizontal}px;}</style>`
    }

    const init = watch(root, () => {
        const getNodes = (target) => {
            const nodes = new Array()
            target.forEach((element) => {
                let children = []
                if (element.slots.default && element.slots.default.length > 0) children = getNodes(element.slots.default)
                const props = JSON.parse(JSON.stringify(element.props))
                if (toSlot(element.vNode) && !isForm(toSlot(element.vNode))) props.class.push('preview-space-lock')
                if (element.vNode == 'ui-checkbox') props.modelValue = []
                const node = h(map.get(element.vNode), props, () => children)
                nodes.push(node)
            })
            return nodes
        }

        const targetNodes = getNodes(tree)

        render(h('div', { class: 'preview-render' }, targetNodes), root.value)
        init()
        map = null
    })

    return { css }
}