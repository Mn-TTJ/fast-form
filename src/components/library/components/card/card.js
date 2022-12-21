import { ref } from "vue"

export default () => {
    const expand = ref(false)

    const setExpand = () => expand.value = !expand.value

    return {
        expand, setExpand
    }
}