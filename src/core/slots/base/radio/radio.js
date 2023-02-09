import { resolveComponent, reactive, ref } from "vue"
import DrogBox from '@/components/panel/operation/components/drogBox/DrogBox.vue'
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'
import ComponentBox from "@/components/panel/operation/components/componentBox/componentBox.vue"

export default (slots, name) => {
    const uiRadio = resolveComponent('ui-radio')
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
            radio: {
                name: '',
                disabled: false,
                labels: ['标签1', '标签2', '标签3'],
                values: [1, 2, 3],
                group: Math.floor(Math.random() * 10000) + '',
                circular: false,
                tick: false,
                noBorder: false,
                btn: false,
                full: false,
            }
        })

        const value = ref(1)

        return <EditBox cProps={cProps.box} cName={'box'}>
            <ComponentBox cName='ui-box' cProps={cProps.box}>
                <uiBox {...cProps.box}>
                    <DrogBox disabled>
                        <EditBox cProps={cProps.radio} cName={'radio'}>
                            <ComponentBox cName='ui-radio' cProps={cProps.radio}>
                                <uiRadio v-model={value.value} {...cProps.radio} />
                            </ComponentBox>
                        </EditBox>
                    </DrogBox>
                </uiBox>
            </ComponentBox>
        </EditBox>
    })
}