import { saveAs } from "file-saver"
import JSZip from "jszip"

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


const getClassSet = (str) => {
    const patte = /\.{1}[0-9a-zA-Z]+/g
    let set = str.replace(/[\r\n]/g, "").replace(/\s+/g, "").match(patte)
    set = set ? set : []
    set = set.map(x => x.slice(1))
    return Array.from(new Set(set))
}

const downloadZip = (files) => {
    const zip = new JSZip()
    files.forEach(file => {
        const folder = zip.folder(file.folder)
        folder.file(file.name, btoa(unescape(encodeURIComponent(file.content))), { base64: true })
    });
    zip.generateAsync({ type: 'blob' }).then(content => {
        saveAs(content, 'download.zip')
    })
}
export { setNumber, setLimit, copy, isDOM, getClassSet, downloadZip }