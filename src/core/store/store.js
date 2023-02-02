import { reactive, shallowRef } from "vue"

const store = reactive({
    editor: Symbol(),
    droger: Symbol(),
    cofNode: null,
    curtainSwicth: false,
    curtainComponent: null
})

const setEditor = (editor) => store.editor = editor

const setdroger = (droger) => store.droger = droger

const setCofNode = (node) => store.cofNode = node

const setCurtain = (component) => store.curtainComponent = shallowRef(component)

const turnOnCurtain = (flag) => {
    store.curtainSwicth = flag
    if (!flag) store.curtainComponent = null
}

export { store, setEditor, setdroger, turnOnCurtain, setCurtain, setCofNode }