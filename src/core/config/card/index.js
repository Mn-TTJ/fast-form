import container from './container.config'
import base from './base.config'
import senior from './senior.config'
import expend from './expand.config'

export default [
    {
        label: '容器',
        components: container
    },
    {
        label: '基础',
        components: base
    },
    {
        label: '高级',
        components: senior
    },
    {
        label: '拓展',
        components: expend
    }
]