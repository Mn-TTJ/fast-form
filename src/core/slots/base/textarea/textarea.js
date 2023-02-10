import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiTextarea = resolveComponent('ui-textarea')
    const uiBox = resolveComponent('ui-box')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            box: {
                flex: false,
                width: '100%',
                height: 'auto',
                color: '#ffffff',
                padding: '0.1rem',
                margin: '0rem'
            },
            textarea: {
                name: '',
                disabled: false,
                parser: '输入',
                max: 200,
                min: 0,
                minRow: 0,
                maxRow: 10,
                resizable: false
            }
        })

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.textarea} cName={'textarea'}>
                            <ComponentBox cName='ui-textarea' cProps={cProps.textarea}>
                                <uiTextarea {...cProps.textarea} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}