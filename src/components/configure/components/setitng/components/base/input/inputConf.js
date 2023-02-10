import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
import { setNumber } from '@/core/utils/utils'

export default function () {

    let cNode

    const input = ref({})

    const name = ref('')
    const parser = ref('输入')
    const max = ref(200)
    const min = ref(0)

    const setMax = ref(null)
    const setMin = ref(null)

    const setAttr = (val, attr) => input.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        input.value = cNode.props
        name.value = input.value.name
        parser.value = input.value.parser
        max.value = input.value.max
        min.value = input.value.min
        setMax.value = setNumber('max', max, cNode)
        setMin.value = setNumber('min', min, cNode)
    }

    onMounted(reSet)

    return { input, name, parser, max, min, reSet, setAttr, setMax, setMin }
}