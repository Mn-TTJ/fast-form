import { treeMethod } from "@/core/tree/tree"
import { store, setForm, setCurtain, turnOnCurtain, setClass } from "@/core/store/store"
import Coding from '@/components/curtain/components/coding/Coding.vue'
import { ref, watch } from 'vue'
import { getClassSet } from "@/core/utils/utils"
import CssImport from '@/components/curtain/components/cssImport/CssImport.vue'

export default function () {
    const css = ref('')

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

    const customCss = () => {
        const preSet = localStorage.getItem('style')
        setCurtain(<Coding preSet={preSet} tips={'避免使用标签选择器，请使用类名选择器'} mode='css' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const editCallBack = (val) => {
        localStorage.setItem('style', val)
        const classSet = getClassSet(val)
        setClass(classSet)
    }

    const setCss = () => {
        setCurtain(<CssImport></CssImport>)
        turnOnCurtain(true)
    }

    watch(() => store.classSet, () => {
        css.value = localStorage.getItem('style')
    })

    return { store, checkName, useForm, customCss, setCss, css }
}