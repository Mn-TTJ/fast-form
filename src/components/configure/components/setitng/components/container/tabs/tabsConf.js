import { store, setDelNode } from "@/core/store/store";
import { ref, reactive, onMounted, nextTick } from "vue";
import { setLimit } from '@/core/utils/utils'
import { treeMethod } from "@/core/tree/tree";
export default function () {
    let panels = ref([])

    const data = reactive({
        active: 0,
        width: '100%',
        height: 'auto'
    })

    let cNode = null
    let tabs = ref({})

    let setActive = ref(null)

    const reSet = () => {
        cNode = store.cofNode
        if (!cNode) console.log("Error,can't find the component")
        tabs.value = cNode.props
        panels.value = cNode.props.panels.map((site) => ({ label: site.label, key: site.label }))
        data.active = cNode.props.tabs.active
        data.width = cNode.props.tabs.width
        data.height = cNode.props.tabs.height
        setActive.value = setLimit(data, 'active', () => {
            const num = parseInt(data.active)
            if (isNaN(num)) return false
            if (num >= panels.value.length) return false
            cNode.props.tabs.active = num
            return true
        })
    }

    const setLabel = (index) => {
        if (panels.value.findIndex((currentValue, currentIndex) => {
            return currentIndex != index && currentValue.label == panels.value[index].label
        }) != -1) {
            panels.value[index].label = cNode.props.panels[index].label
            return
        }
        cNode.props.panels[index].label = panels.value[index].label
        panels.value[index].key = panels.value[index].label
    }

    const setAttr = (attr) => cNode.props.tabs[attr] = data[attr]

    const addPanel = () => {
        const len = cNode.props.panels.length + 1
        cNode.props.panels.push({
            cName: 'ui-tabs-panel',
            label: len + ''
        })
        panels.value.push({ label: len + '', key: len + '' })
    }

    const delPanel = (index) => {
        panels.value.splice(index, 1)
        cNode.props.panels.splice(index, 1)
        nextTick(() => {
            treeMethod.delChild(store.delNode, store.delNodeParent)
            setDelNode(null, null)
        })
    }

    onMounted(reSet)

    return { tabs, panels, data, reSet, setAttr, setActive, setLabel, addPanel, delPanel }
}