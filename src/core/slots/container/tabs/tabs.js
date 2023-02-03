import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiTabs = resolveComponent('ui-tabs')
    const uiTabsPanel = resolveComponent('ui-tab-panel')

    slots.set(name, () => {

        const tabs = reactive({
            active: 0,
            height: 'auto',
            width: '100%'
        })

        const panels = reactive([
            {
                cName: 'ui-tabs-panel',
                label: '1'
            }, {
                cName: 'ui-tabs-panel',
                label: '2'
            }, {
                cName: 'ui-tabs-panel',
                label: '3'
            }
        ])

        return <EditBox cName='tabs' cProps={{ tabs, panels }}>
            <ComponentBox cName='ui-tabs' cProps={tabs}>
                <uiTabs {...tabs}>
                    {panels.map(({ cName, label }) => {
                        return <ComponentBox cName={cName} cProps={{ label }} key={label}>
                            <uiTabsPanel label={label}>
                                <DrogBox></DrogBox>
                            </uiTabsPanel>
                        </ComponentBox>
                    })}
                </uiTabs>
            </ComponentBox>
        </EditBox>
    })
}