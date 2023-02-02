import { resolveComponent } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiTabs = resolveComponent('ui-tabs')
    const uiTabsPanel = resolveComponent('ui-tab-panel')

    slots.set(name, (pId) => {

        return <EditBox cNode={uiTabs} pId={pId}>
            <uiTabs>
                <uiTabsPanel label="1">
                    <DrogBox></DrogBox>
                </uiTabsPanel>
                <uiTabsPanel label="2">
                    <DrogBox></DrogBox>
                </uiTabsPanel>
                <uiTabsPanel label="3">
                    <DrogBox></DrogBox>
                </uiTabsPanel>
            </uiTabs>
        </EditBox>
    })
}