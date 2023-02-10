import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
import { setNumber } from '@/core/utils/utils'

export default function () {

    let cNode

    const textarea = ref({})

    const name = ref('')
    const parser = ref('输入')
    const max = ref(200)
    const min = ref(0)
    const minRow = ref(0)
    const maxRow = ref(10)

    const setMax = ref(null)
    const setMin = ref(null)
    const setMinRow = ref(null)
    const setMaxRow = ref(null)

    const setAttr = (val, attr) => textarea.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        textarea.value = cNode.props
        name.value = textarea.value.name
        parser.value = textarea.value.parser
        max.value = textarea.value.max
        min.value = textarea.value.min
        setMax.value = setNumber('max', max, cNode)
        setMin.value = setNumber('min', min, cNode)
    }

    onMounted(reSet)

    return { textarea, name, parser, max, min, maxRow, minRow, reSet, setAttr, setMax, setMin, setMaxRow, setMinRow }
}