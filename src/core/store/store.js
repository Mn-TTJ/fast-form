import { reactive } from "vue"

const store = reactive({
    editor: Symbol(),
    droger: Symbol(),
    curtainSwicth: false,
    curtainComponent: null
})

const setEditor = (editor) => store.editor = editor

const setdroger = (droger) => store.droger = droger

const setCurtain = (component) => store.curtainComponent = component

const turnOnCurtain = (flag) => store.curtainSwicth = flag

export { store, setEditor, setdroger, turnOnCurtain, setCurtain }