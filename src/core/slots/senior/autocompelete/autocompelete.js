import { resolveComponent, reactive } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiAutocompelete = resolveComponent('ui-autocompelete')
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
            autocompelete: {
                name: '',
                disabled: false,
                parser: '输入',
                clearable: false,
                tips: ['hello', 'world'],
            }
        })

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.autocompelete} cName={'autocompelete'}>
                            <ComponentBox cName='ui-autocompelete' cProps={cProps.autocompelete}>
                                <uiAutocompelete  {...cProps.autocompelete} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}