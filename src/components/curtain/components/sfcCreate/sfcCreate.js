import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/snippets/html'
import 'ace-builds/src-noconflict/snippets/css'
import { ref, watch } from "vue";
import { treeMethod } from '@/core/tree/tree'
import { store } from '@/core/store/store'
import { toSlot, isForm } from '@/core/config/toSlots/toSlots'
import { getMValue } from '@/core/config/compile/compile'
import { downloadZip } from '@/core/utils/utils'

export default function (vueEditer, cssEditer) {
    const fileType = ref(true)

    const typeTransform = (type) => fileType.value = type

    const formMap = new Map()
    let hasForm = false
    const ObjectMap = new Map()

    let tempRes = ''
    let cssRes = ''

    const compileClass = (element, global) => {
        let classStr = ''
        if (element.props.class) classStr += element.props.class.join(' ')
        if (global) {
            if (toSlot(element.vNode) && !isForm(toSlot(element.vNode))) {
                if (classStr.length > 0) classStr += ' '
                classStr += 'global-lock'
            }
        }
        if (classStr.length != 0) classStr = ' class="' + classStr + '"'
        return classStr
    }

    const compileMValue = (element) => {
        const mValue = getMValue(element.vNode)
        let script = ''
        let temp = ''
        if (mValue) {
            if (!hasForm) {
                script += '\nimport {ref} from "vue"'
                hasForm = true
            }
            let count = 1
            if (formMap.has(mValue.name)) count = formMap.get(mValue.name) + 1
            formMap.set(mValue.name, count)
            script += '\nconst ' + mValue.name + count + '=ref(' + mValue.default + ')'
            temp = ' :v-model="' + mValue.name + count + '"'
        }
        return [temp, script]
    }

    const compileProps = (element) => {
        let temp = ''
        let script = ''
        for (let [key, value] of Object.entries(element.props)) {
            if (key != 'class') {
                if (element.vNode == 'ui-tab-panel' && key == 'cName') { temp += '' }
                else if (element.vNode == 'ui-code' && key == 'code') {
                    let count = 1
                    if (ObjectMap.has('code')) count = 1 + ObjectMap.get('code')
                    ObjectMap.set('code', count)
                    temp += (' :code="codeStr' + count + '"')
                    if (!hasForm) {
                        script += '\nimport {ref} from \'vue\''
                        hasForm = true
                    }
                    script += '\nconst codeStr' + count + '=ref("' + value + '")'
                }
                else if (element.vNode == 'ui-table' && key == 'data') {
                    let count = 1
                    if (ObjectMap.has('data')) count = 1 + ObjectMap.get('data')
                    ObjectMap.set('data', count)
                    temp += (' :data="tData' + count + '"')
                    if (!hasForm) {
                        script += '\nimport {ref} from \'vue\''
                        hasForm = true
                    }
                    script += '\nconst tData' + count + '=ref(' + JSON.stringify(value, null, 4) + ')'
                }
                else if (element.vNode == 'ui-autocompelete' && key == 'tips') {
                    let count = 1
                    if (ObjectMap.has('tips')) count = 1 + ObjectMap.get('tips')
                    ObjectMap.set('tips', count)
                    temp += (' :tips="tipsArr' + count + '"')
                    if (!hasForm) {
                        script += '\nimport {ref} from \'vue\''
                        hasForm = true
                    }
                    script += '\nconst tipsArr' + count + '=ref(' + JSON.stringify(value) + ')'
                }
                else if (element.vNode == 'ui-select' && key == 'dataSet') {
                    let count = 1
                    if (ObjectMap.has('dataSet')) count = 1 + ObjectMap.get('dataSet')
                    ObjectMap.set('dataSet', count)
                    temp += (' :dataSet="sDataSet' + count + '"')
                    if (!hasForm) {
                        script += '\nimport {ref} from \'vue\''
                        hasForm = true
                    }
                    script += '\nconst sDataSet' + count + '=ref(' + JSON.stringify(value) + ')'
                }
                else {
                    if (typeof value == 'boolean' && value) temp += (' ' + key)
                    else if (typeof value == 'string') temp += (' ' + key + '="' + value + '"')
                    else if (typeof value == 'number') temp += (' :' + key + '="' + value + '"')
                    else if (typeof value == 'object' && value instanceof Array) temp += (' :' + key + '="' + JSON.stringify(value).replaceAll('"', '\'') + '"')
                }
            }
        }
        return [temp, script]
    }

    const compileTemplates = () => {
        const tree = treeMethod.getTree()
        const global = store.horizontal > 0 || store.vertical > 0
        let template = '<template>'
        if (store.form) template += '\n\t<ui-form>'
        let script = '<script setup>\n// 前置包mn-ttj-ui'
        const fn = (list, tab) => {
            let temp = ''
            list.forEach(element => {
                temp += ('\n' + tab + '<' + element.vNode)
                temp += compileClass(element, global)
                const mValue = compileMValue(element)
                temp += mValue[0]
                script += mValue[1]
                const props = compileProps(element)
                temp += props[0]
                script += props[1]
                temp += '>'
                if (element.slots.default && element.slots.default.length > 0) temp += (fn(element.slots.default, tab + '\t') + '\n' + tab)
                temp += ('</' + element.vNode + '>')
            });
            return temp
        }
        template += fn(tree, store.form ? '\t\t' : '\t')
        if (store.form) template += '\n\t</ui-form>'
        template += '\n</template>'
        template += ('\n\n' + script + '\n</script>')
        if (store.classSet.length > 0 || global) template += ('\n\n<style scope>\n@import \'../css/index.css\';\n</style>')
        return template
    }

    const compileCss = () => {
        let css = ''
        const global = store.horizontal > 0 || store.vertical > 0
        if (global) {
            css += '.global-lock{\n\tmargin: ' + (store.vertical ? (store.vertical + 'px ') : 'auto ') + (store.horizontal ? (store.horizontal + 'px') : 'auto') + ';\n}'
        }
        let local = localStorage.getItem('style')
        if (local) css += ('\n' + local)
        return css
    }

    const vueTemplate = (editer) => {
        tempRes = compileTemplates()
        ace.edit(editer, {
            mode: 'ace/mode/html',
            theme: 'ace/theme/monokai',
            fontSize: 14, // 编辑器内字体大小
            tabSize: 4,// 制表符设置为 4 个空格大小
            selectionStyle: "text",
            readOnly: true
        }).getSession().setValue(tempRes)
    }

    const cssTemplate = (editer) => {
        cssRes = compileCss()
        ace.edit(editer, {
            mode: 'ace/mode/css',
            theme: 'ace/theme/monokai',
            fontSize: 14, // 编辑器内字体大小
            tabSize: 4,// 制表符设置为 4 个空格大小
            selectionStyle: "text",
            readOnly: true
        }).getSession().setValue(cssRes)
    }

    const init = watch([vueEditer, cssEditer], () => {
        vueTemplate(vueEditer.value)
        cssTemplate(cssEditer.value)
        init()
    })

    const downloadVue = () => {
        downloadZip([{
            folder: 'vue',
            name: 'form.vue',
            content: tempRes
        }])
    }

    const downloadCss = () => {
        downloadZip([{
            folder: 'css',
            name: 'index.css',
            content: cssRes
        }])
    }

    const downloadAll = () => {
        downloadZip([{
            folder: 'vue',
            name: 'form.vue',
            content: tempRes
        }, {
            folder: 'css',
            name: 'index.css',
            content: cssRes
        }])
    }

    return { fileType, typeTransform, downloadVue, downloadCss, downloadAll }
}