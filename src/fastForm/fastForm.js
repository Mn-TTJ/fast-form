import { watch } from 'vue'
import { setTips } from '@/core/store/store'
export default function (tips) {
    const useTips = watch(tips, () => {
        setTips(tips.value.setTips)
        useTips()
    })
}