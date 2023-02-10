import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
import { setNumber } from '@/core/utils/utils'

export default function () {

    let cNode

    const counter = ref({})

    const name = ref('')
    const skip = ref(1)

    const setSkip = ref(null)

    const setAttr = (val, attr) => counter.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        counter.value = cNode.props
        name.value = counter.value.name
        skip.value = counter.value.skip
        setSkip.value = setNumber('skip', skip, cNode)
    }

    onMounted(reSet)

    return { counter, name, skip, reSet, setAttr, setSkip }
}