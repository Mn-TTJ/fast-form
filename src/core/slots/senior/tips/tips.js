import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiTips = resolveComponent('ui-tips')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            tips: {
            }
        })

        return <EditBox cProps={cProps} cName={'tips'}>
            <ComponentBox cName='ui-tips' cProps={cProps.tips}>
                <uiTips {...cProps.tips} />
            </ComponentBox>
        </EditBox>
    })
}