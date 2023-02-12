import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/snippets/json'
import { onMounted } from 'vue'
import { treeMethod } from '@/core/tree/tree'
export default function (panel) {
    onMounted(() => {
        ace.edit(panel.value, {
            mode: 'ace/mode/json',
            theme: 'ace/theme/monokai',
            fontSize: 14, // 编辑器内字体大小
            tabSize: 4,// 制表符设置为 4 个空格大小
            selectionStyle: "text",
            readOnly: true
        }).getSession().setValue(treeMethod.toJson())
    })

    const download = () => {
        const buffer = "data:text/json;charset=utf-8," + encodeURIComponent(treeMethod.toJson())
        const downloadAnchorNode = document.createElement('a')
        downloadAnchorNode.setAttribute('href', buffer)
        downloadAnchorNode.setAttribute('download', 'config.json')
        downloadAnchorNode.click()
        downloadAnchorNode.remove()
    }
    return { download }
}