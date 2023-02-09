import { store, setCurtain, turnOnCurtain } from "@/core/store/store";
import { onMounted, ref, watch, nextTick } from "vue";
import { copy } from '@/core/utils/utils.js'
import Coding from '@/components/curtain/components/coding/Coding.vue'
export default function () {

    const tips = `[\n\t{\n\t\t"a":{\t\\\\列属性\n\t\t\t"label":"1"\t\\\\列属性值\n\t\t},\n\t\t...其他列\n\t}\t\\\\行数据\n\t...其他行\n]\n//行数据之间保持列属性键名一致`

    let cNode = null
    let tableProps = null
    let columns = ref([])

    const border = ref(false)
    const height = ref('auto')

    const dataSet = () => {
        setCurtain(<Coding preSet={tableProps.data} tips={tips} mode='json' callBack={editCallBack} />)
        turnOnCurtain(true)
    }

    const editCallBack = (val) => {
        if (val.length == 0) return
        const keys = new Set(Object.keys(val[0]))
        const len = keys.size
        for (let row of val) {
            const keyValues = Object.entries(row)
            if (keyValues.length != len) return
            for (let [key, value] of keyValues) {
                if (!keys.has(key)) return
                if (!Object.hasOwn(value, 'label')) return
            }
        }
        const newColumns = new Array()
        for (let key of keys) {
            let flag = false
            for (let column of columns.value) {
                if (column.prop == key) {
                    newColumns.push(copy(column))
                    flag = true
                    break
                }
            }
            if (!flag) newColumns.push({
                prop: key,
                label: key,
                width: 'auto'
            })
        }
        tableProps.data = []
        nextTick(() => tableProps.data = val)
        cNode.props.columns = newColumns
        columns.value = newColumns
    }

    const setTableAttr = (value, attr) => tableProps[attr] = value

    const setColumsAtrr = (value, attr, index) => cNode.props.columns[index][attr] = value

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        tableProps = cNode.props.table
        columns.value = copy(cNode.props.columns)
        border.value = tableProps.border
    }

    watch(border, () => tableProps.border = border)

    onMounted(reSet)

    return { border, height, columns, reSet, setTableAttr, setColumsAtrr, dataSet }
}