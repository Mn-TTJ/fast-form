import { watch } from 'vue'
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/snippets/json'
import 'ace-builds/src-noconflict/snippets/text'
import 'ace-builds/src-noconflict/snippets/html'
export default function (codeBox, codeTips, props) {

    let edit = null

    const aceMode = {
        json: 'ace/mode/json',
        text: 'ace/mode/text',
        html: 'ace/mode/html'
    }

    const init = watch(codeBox, () => {
        edit = ace.edit(codeBox.value, {
            mode: aceMode[props.mode],
            theme: 'ace/theme/monokai',
            fontSize: 14, // 编辑器内字体大小
            tabSize: 4,// 制表符设置为 4 个空格大小
            selectionStyle: "text"
        })
        if (props.json) edit.getSession().setValue(JSON.stringify(props.preSet, null, 4))
        else edit.getSession().setValue(props.preSet)
        const tiper = ace.edit(codeTips.value, {
            mode: aceMode.text,
            theme: 'ace/theme/monokai',
            fontSize: 12, // 编辑器内字体大小
            tabSize: 4,// 制表符设置为 4 个空格大小
            selectionStyle: "text",
            readOnly: true
        })
        tiper.getSession().setValue(props.tips)
        init()
    })

    const getContent = () => {
        if (props.json) props.callBack(JSON.parse(edit.getSession().getValue()))
        else props.callBack(edit.getSession().getValue())
    }

    return { getContent }
}