import { resolveComponent, reactive } from "vue"
import EditBox from '@/components/panel/operation/components/editBox/EditBox.vue'

export default (slots, name) => {
    const uiTable = resolveComponent('ui-table')
    const uiTColumn = resolveComponent('ui-table-column')

    slots.set(name, (pId) => {

        const data = reactive([
            {
                aa: {
                    label: 'aa',
                    state: 1,
                },
                bb: {
                    label: 'bb'
                },
                cc: {
                    label: 'cc'
                }
            },
            {
                aa: {
                    label: 'aa'
                },
                bb: {
                    label: 'bb',
                    state: 2
                },
                cc: {
                    label: 'cc',
                    state: 1
                },
                state: 2
            },
            {
                aa: {
                    label: 'aa',
                    state: 1
                },
                bb: {
                    label: 'bb',
                    state: 1
                },
                cc: {
                    label: '艹'
                },
                state: 1
            },
            {
                aa: {
                    label: 'aa'
                },
                bb: {
                    label: 'bb'
                },
                cc: {
                    label: '艹'
                }
            },
            {
                aa: {
                    label: 'aa'
                },
                bb: {
                    label: 'bb',
                    state: 2
                },
                cc: {
                    label: '艹'
                }
            }
        ])

        return <EditBox cNode={uiTable} pId={pId}>
            <uiTable data={data}>
                <uiTColumn prop='aa' label='a'></uiTColumn>
                <uiTColumn prop='bb' label='b'></uiTColumn>
                <uiTColumn prop='cc' label='c'></uiTColumn>
            </uiTable>
        </EditBox>
    })
}