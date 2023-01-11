import { reactive } from "vue"

const store = reactive({
    editor: Symbol(),
    droger: Symbol()
})

const setEditor = (editor) => store.editor = editor


const setdroger = (droger) => store.droger = droger

export { store, setEditor, setdroger }