import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiEidtDialog = resolveComponent('ui-edit-dialog')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            dialog: {
                radius: '0.2rem',
                title: '标题',
                width: '20rem',
                height: 'auto',
                color: '#ffffff',
                panelOnly: false,
                shadow: false,
                class: []
            }
        })

        return <EditBox cProps={cProps} cName={'dialog'}>
            <ComponentBox cName='ui-edit-dialog' cProps={cProps.dialog}>
                <uiEidtDialog {...cProps.dialog}></uiEidtDialog>
                <DrogBox></DrogBox>
            </ComponentBox>
        </EditBox>
    })
}