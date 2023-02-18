import { treeMethod } from "@/core/tree/tree"
import { store, setForm } from "@/core/store/store"

export default function () {
    const checkName = () => {
        const set = new Set()
        const tree = treeMethod.getTree()
        let unName = false
        const check = (children) => {
            if (children.length == 0) return true
            for (let node of children) {
                if (node.props.name != undefined) {
                    if (node.props.name.length == 0) {
                        unName = true
                        return false
                    }
                    if (set.has(node.props.name)) return false
                    set.add(node.props.name)
                }
                const result = check(node.slots.default)
                if (!result) return false
            }
            return true
        }
        const res = check(tree)
        if (unName) store.tips({ text: '检测到未命名组件，建议修改', color: '#FF0000', auto: true })
        else if (!res) store.tips({ text: '检测到重名表单组件，建议修改', color: '#FF0000', auto: true })
        else store.tips({ text: '通过检测，无冲突', color: '#008B8B', auto: true })
    }

    const useForm = () => {
        setForm()
        if (store.form) store.tips({ text: '已启动表单控件', color: '#008B8B', auto: true })
        else store.tips({ text: '已取消表单控件', color: '#a9a7a7', auto: true })
    }

    return { checkName, useForm }
}