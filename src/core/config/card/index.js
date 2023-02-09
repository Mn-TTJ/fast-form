import container from './container.config'
import base from './base.config'
import senior from './senior.config'

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
    }
]