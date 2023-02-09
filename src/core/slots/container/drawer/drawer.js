import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiDrawer = resolveComponent('ui-drawer')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            drawer: {
                altitude: '600px',
                right: false,
                bottom: false,
                top: false,
                color: '#ffffff',
                noHeader: true
            }
        })

        return <EditBox cProps={cProps} cName={'drawer'}>
            <ComponentBox cName='ui-drawer' cProps={cProps.drawer}>
                <uiDrawer {...cProps.drawer}></uiDrawer>
                <DrogBox></DrogBox>
            </ComponentBox>
        </EditBox>
    })
}