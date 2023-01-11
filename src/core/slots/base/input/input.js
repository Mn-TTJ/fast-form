import { resolveComponent } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiInput = resolveComponent('ui-input')

    slots.set(name, (pId) => {
        return <EditBox pId={pId} cNode={uiInput}>
            <uiInput />
        </EditBox>
    })
}