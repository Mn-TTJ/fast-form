import Preview from '@/components/curtain/components/preview/Preview.vue'
import { turnOnCurtain, setCurtain } from '@/core/store/store.js'

export default [
    {
        label: '&#xe645;清空',
        event: null
    }, {
        label: '&#xe6a2;预览',
        event: () => {
            turnOnCurtain(true);
            setCurtain(Preview)
        }
    }, {
        label: '导入JSON',
        event: null
    }, {
        label: '导出JSON',
        event: null
    }, {
        label: '导出代码',
        event: null
    }, {
        label: '&#xe6df;生成SFC',
        event: null
    }
]