import { onMounted, ref } from "vue"

export default (btn1, btn2, line, emits) => {

    let widthBtn1 = 0

    let widthBtn2 = 0

    let rem = 0

    let select = ref(1)

    const width = ref(0)

    const left = ref(0)

    const changeOverEvent = (num) => {
        select.value = num
        emits('navSelect', num)
        if (num === 1) {
            width.value = widthBtn1 + 'px'
            left.value = rem + 'px'
        }
        if (num === 2) {
            width.value = widthBtn2 + 'px'
            left.value = (3 * rem + widthBtn1) + 'px'
        }
    }

    const getNumber = (target, attr) => {
        const style = window.getComputedStyle(target)[attr]
        return parseFloat(style.replace(/[^0-9.]/ig, ""))
    }

    onMounted(() => {
        setTimeout(() => {
            widthBtn1 = getNumber(btn1.value, 'width')
            widthBtn2 = getNumber(btn2.value, 'width')
            rem = getNumber(document.documentElement, 'fontSize')
            changeOverEvent(1)
            setTimeout(() => line.value.style.transitionDuration = '0.3s', 10)
        }, 100)
    })

    return {
        select, width, left, changeOverEvent
    }
}