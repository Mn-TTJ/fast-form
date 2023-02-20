import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiCheckBox = resolveComponent('ui-checkbox')
    const uiBox = resolveComponent('ui-box')

    slots.set(name, (cProps) => {
        if (!cProps) cProps = reactive({
            box: {
                flex: false,
                width: '100%',
                height: 'auto',
                color: '#ffffff',
                padding: '0.1rem',
                margin: '0rem',
                class: []
            },
            checkbox: {
                name: '',
                disabled: false,
                labels: ['标签1', '标签2', '标签3'],
                all: false,
                hasBorder: false,
                class: []
            }
        })

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box} >
                    <DrogBox disabled>
                        <EditBox cProps={cProps.checkbox} cName={'checkbox'}>
                            <ComponentBox cName='ui-checkbox' cProps={cProps.checkbox}>
                                <uiCheckBox  {...cProps.checkbox} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}