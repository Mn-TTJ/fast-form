import { store } from "@/core/store/store";
import { onMounted, ref } from "vue";
import { setNumber } from '@/core/utils/utils'

export default function () {

    let cNode

    const upload = ref({})

    const name = ref('')
    const text = ref('upload')
    const accept = ref('')
    const max = ref(100)

    const setMax = ref(null)

    const setAttr = (val, attr) => upload.value[attr] = val

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        upload.value = cNode.props
        name.value = upload.value.name
        text.value = upload.value.text
        accept.value = upload.value.accept
        max.value = upload.value.max
        setMax.value = setNumber('max', max, cNode)
    }

    onMounted(reSet)

    return { upload, name, text, accept, max, reSet, setAttr, setMax }
}