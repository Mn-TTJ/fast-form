import { reactive, shallowRef } from "vue"

const store = reactive({
    editor: Symbol(),
    droger: Symbol(),
    cofNode: null,
    curtainSwicth: false,
    curtainComponent: null,
    delNode: null,
    delNodeParent: null
})

const setEditor = (editor) => store.editor = editor

const setdroger = (droger) => store.droger = droger

const setCofNode = (node) => store.cofNode = node

const setCurtain = (component) => store.curtainComponent = shallowRef(component)

const setDelNode = (delNode, delNodeParent) => { store.delNode = delNode, store.delNodeParent = delNodeParent }

const turnOnCurtain = (flag) => {
    store.curtainSwicth = flag
    if (!flag) store.curtainComponent = null
}

export { store, setEditor, setdroger, turnOnCurtain, setCurtain, setCofNode, setDelNode }