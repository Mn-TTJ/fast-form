import { turnOnCurtain, setClass } from '@/core/store/store.js'
import { getClassSet } from '@/core/utils/utils'

export default function () {
    const upload = () => {
        const input = document.createElement('input')
        input.setAttribute('type', 'file')
        input.setAttribute('accept', 'text/css')
        input.click()
        input.onchange = () => {
            const reader = new FileReader()
            reader.readAsText(input.files[0], "UTF-8")
            reader.onload = ((e) => {
                const css = e.target.result
                localStorage.setItem('style', css)
                const classSet = getClassSet(css)
                setClass(classSet)
                turnOnCurtain(false)
            })
        }
    }

    return { upload }
}