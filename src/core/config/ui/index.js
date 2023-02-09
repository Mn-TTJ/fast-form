const map = new Map()

const setUI = (name, node) => {
    map.set(name, node)
}

const getUI = (name) => map.get(name)

export { setUI, getUI }