import { reactive, shallowRef } from "vue"

const store = reactive({
    editor: null,
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
    rootFilp: null,
    tips: null,
    form: false,
    classSet: [],
    horizontal: 0,
    vertical: 0
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

const setRoot = (rootReBuild, rootClear, rootFilp) => { store.rootReBuild = rootReBuild, store.rootClear = rootClear, store.rootFilp = rootFilp }

const setForm = () => store.form = !store.form

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

const setClass = (classSet) => store.classSet = classSet

const setSpace = (direction, inOrde) => {
    if (direction) {
        if (inOrde) store.horizontal++
        else {
            if (store.horizontal > 0) store.horizontal--
        }
    } else {
        if (inOrde) store.vertical++
        else {
            if (store.vertical > 0) store.vertical--
        }
    }
}

export { store, setEditor, setdroger, turnOnCurtain, setCurtain, setCofNode, setDelNode, setRoot, setTips, setForm, setClass, setSpace, historyStack }