<!--<template>
<div class="about">
    <h1>This is an about page</h1>
</div>
</template> -->
<template>
    <div>
        <Table border :columns="columns7" :data="data6.list"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="40" :current="1" @on-change="getMyAllFiles"></Page>
            </div>
        </div>
        <!--        <Button @click="handleSelectAll(true)">Prev</Button>
        <Button @click="handleSelectAll(false)">Next</Button> -->
    </div>
</template>

<script>
/* eslint-disable */
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
        console.log('-------------ooooooooooooo')
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

            /*   data6: [{
                      name: 'John Brown',
                      age: 18,
                      address: 'New York No. 1 Lake Park'
                  },
                  {
                      name: 'Jim Green',
                      age: 24,
                      address: 'London No. 1 Lake Park'
                  },
                  {
                      name: 'Joe Black',
                      age: 30,
                      address: 'Sydney No. 1 Lake Park'
                  },
                  {
                      name: 'Jon Snow',
                      age: 26,
                      address: 'Ottawa No. 2 Lake Park'
                  }
              ] */
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
/*        changePage(a,b,c) {
            console.log('-------------ooooooooooooo'+" "+a+b );
            // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
            //this.tableData1 = this.mockTableData1();
        }*/
    }
}
</script>
