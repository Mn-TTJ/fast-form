import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiUpload = resolveComponent('ui-upload')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            upload: {
                name: '',
                disabled: false,
                text: 'upload',
                accept: '',
                cover: true,
                multiple: false,
                max: 100,
                picture: false
            }
        })

        return <EditBox cProps={cProps.upload} cName={'upload'}>
            <ComponentBox cName='ui-upload' cProps={cProps.upload}>
                <uiUpload  {...cProps.upload} />
            </ComponentBox>
        </EditBox>
    })
}