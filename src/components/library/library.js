import { ref } from "vue"

export default () => {

    const select = ref(1)

    const changeOverEvent = (num) => select.value = num

    return { select, changeOverEvent }
}