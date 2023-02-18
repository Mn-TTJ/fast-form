import container from './container'
import base from './base'
import senior from './senior'
import defaultConf from './default/defaultConf.vue'

export default [...container, ...base, ...senior, ['default', defaultConf]]