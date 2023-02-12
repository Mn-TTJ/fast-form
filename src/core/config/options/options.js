import Preview from '@/components/curtain/components/preview/Preview.vue'
import JsonEXport from '@/components/curtain/components/jsonExport/JsonExport.vue'
import { turnOnCurtain, setCurtain } from '@/core/store/store.js'

const openCurtain = (curtain) => {
    return () => {
        setCurtain(curtain)
        turnOnCurtain(true)
    }
}

export default [
    {
        label: '&#xe645;清空',
        event: null
    }, {
        label: '&#xe6a2;预览',
        event: openCurtain(Preview)
    }, {
        label: '导入JSON',
        event: null
    }, {
        label: '导出JSON',
        event: openCurtain(JsonEXport)
    }, {
        label: '&#xe6df;生成SFC',
        event: null
    }
]