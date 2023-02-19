import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiLine = resolveComponent('ui-line')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            line: {
                thick: '1px',
                vertical: false,
                color: '#EBEEF5',
                len: '100%',
                space: '0.5rem',
                dashed: false,
                class: []
            }
        })

        return <EditBox cProps={cProps.line} cName={'line'}>
            <ComponentBox cName='ui-line' cProps={cProps.line}>
                <uiLine  {...cProps.line} />
            </ComponentBox>
        </EditBox>
    })
}