const setNumber = (name, attr, node) => {
    let last = attr.value
    return () => {
        const num = parseFloat(attr.value)
        if (isNaN(num)) attr.value = last
        else {
            last = num,
                attr.value = num
            node.props[name] = num
        }
    }
}

const setLimit = (target, attr, limitFn) => {
    let last = target[attr]
    return () => {
        if (!limitFn(target)) {
            target[attr] = last
            return false
        } else {
            last = target[attr]
            return true
        }
    }
}

const copy = (obj) => JSON.parse(JSON.stringify(obj))

export { setNumber, setLimit, copy }