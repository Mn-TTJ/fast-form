import { resolveComponent } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import componentBox from '@/components/panel/operation/components/componentBox/componentBox.vue'

export default (slots, name) => {
    const uiTextArea = resolveComponent('ui-textarea')

    slots.set(name, (pId) => {
        return <EditBox pId={pId} cNode={uiTextArea}>
            <componentBox>
                <uiTextArea />
            </componentBox>
        </EditBox>
    })
}