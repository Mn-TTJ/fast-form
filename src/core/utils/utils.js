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

const isDOM = (typeof HTMLElement === 'object') ?
    function (obj) {
        return obj instanceof HTMLElement;
    } :
    function (obj) {
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    }

export { setNumber, setLimit, copy, isDOM }