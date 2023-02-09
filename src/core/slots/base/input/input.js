import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiInput = resolveComponent('ui-input')
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
            input: {
                name: '',
                disabled: false,
                parser: '输入',
                max: 200,
                min: 0,
                clearable: false,
                password: false,
            }
        })

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.input} cName={'input'}>
                            <ComponentBox cName='ui-input' cProps={cProps.input}>
                                <uiInput {...cProps.input} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}