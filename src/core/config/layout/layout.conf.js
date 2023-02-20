import layout1 from '@/assets/json/layout1.config.json'
import layout2 from '@/assets/json/layout2.config.json'
import layout3 from '@/assets/json/layout3.config.json'
import layout4 from '@/assets/json/layout4.config.json'
import layout5 from '@/assets/json/layout5.config.json'
export default [
    {
        label: '单列表单',
        image: require('@/assets/layout/layout1.png'),
        json: JSON.stringify(layout1)
    }, {
        label: '卡片表单',
        image: require('@/assets/layout/layout2.png'),
        json: JSON.stringify(layout2)
    }, {
        label: '文件表单',
        image: require('@/assets/layout/layout3.png'),
        json: JSON.stringify(layout3)
    }, {
        label: '选项表单',
        image: require('@/assets/layout/layout4.png'),
        json: JSON.stringify(layout4)
    }, {
        label: '标签页表单',
        image: require('@/assets/layout/layout5.png'),
        json: JSON.stringify(layout5)
    }
]