<template>
    <div>
        <Table border :columns="columns7" :data="data6.list"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="40" :current="1" @on-change="getMyAllFiles"></Page>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from 'vuex'
export default {
    computed: {
        ...mapState('global', [
            'data6'
        ])
    },
    created() {
        console.log('-------------getMyAllFiles')
        this.getMyAllFiles()
    },
    data() {
        return {
            columns7: [{
                    title: 'Name',
                    key: 'name',
                    render: (h, params) => {
                        return h('div', [
                            h('Icon', {
                                props: {
                                    type: 'person'
                                }
                            }),
                            h('strong', params.row.name)
                        ]);
                    }
                },
                {
                    title: 'Path',
                    key: 'path'
                },
                {
                    title: 'LastModiTime',
                    key: 'lastModiTime'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, 'View'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, 'Delete')
                        ]);
                    }
                }
            ],
        }
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: 'User Info',
                content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove(index) {
            this.data6.splice(index, 1);

        },
        ...mapActions('global', [
            'getMyAllFiles'
        ]),
    }
}
</script>
