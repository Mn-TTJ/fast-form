import Preview from '@/components/curtain/components/preview/Preview.vue'
import JsonEXport from '@/components/curtain/components/jsonExport/JsonExport.vue'
import JsonImport from '@/components/curtain/components/jsonImport/JsonImport.vue'
import SfcCreate from '@/components/curtain/components/sfcCreate/SfcCreate.vue'
import { turnOnCurtain, setCurtain } from '@/core/store/store.js'
import { clear } from '@/core/slots'

const openCurtain = (curtain) => {
    return () => {
        setCurtain(curtain)
        turnOnCurtain(true)
    }
}

export default [
    {
        label: '&#xe645;清空',
        event: clear,
    }, {
        label: '&#xe6a2;预览',
        event: openCurtain(Preview)
    }, {
        label: '导入JSON',
        event: openCurtain(JsonImport)
    }, {
        label: '导出JSON',
        event: openCurtain(JsonEXport)
    }, {
        label: '&#xe6df;生成SFC',
        event: openCurtain(SfcCreate)
    }
]