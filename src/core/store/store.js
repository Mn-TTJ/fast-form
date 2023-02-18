import { reactive, shallowRef } from "vue"

const store = reactive({
    editor: Symbol(),
    droger: Symbol(),
    cofNode: null,
    curtainSwicth: false,
    curtainComponent: null,
    delNode: null,
    delNodeParent: null,
    pastStack: new Array(),
    nextStack: new Array(),
    rootReBuild: null,
    rootClear: null,
    tips: null
})

const setEditor = (editor) => store.editor = editor

const setdroger = (droger) => store.droger = droger

const setCofNode = (node) => store.cofNode = node

const setCurtain = (component) => store.curtainComponent = shallowRef(component)

const setDelNode = (delNode, delNodeParent) => { store.delNode = delNode, store.delNodeParent = delNodeParent }

const setTips = (tips) => store.tips = tips

const turnOnCurtain = (flag) => {
    store.curtainSwicth = flag
    if (!flag) store.curtainComponent = null
}

const setRoot = (rootReBuild, rootClear) => { store.rootReBuild = rootReBuild, store.rootClear = rootClear }

const setPastStack = (past) => {
    store.nextStack = []
    if (store.pastStack >= 10) store.pastStack.shift()
    store.pastStack.push(past)
    localStorage.setItem('slots', past.history)
}

const toNextStack = () => {
    let next = null
    if (store.nextStack.length > 0) {
        next = store.nextStack.pop()
        store.pastStack.push(next)
        localStorage.setItem('slots', next.history)
        return next
    }
    return null
}

const toPackStack = () => {
    let past = null
    if (store.pastStack.length > 1) {
        store.nextStack.push(store.pastStack.pop())
        past = store.pastStack[store.pastStack.length - 1]
        localStorage.setItem('slots', past.history)
        return past
    }
    return null
}
const historyStack = { setPastStack, toNextStack, toPackStack }

export { store, setEditor, setdroger, turnOnCurtain, setCurtain, setCofNode, setDelNode, setRoot, setTips, historyStack }