<template>
<div align="center">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
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
    data() {
        return {
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [{
                    required: true,
                    message: 'Please fill in the user name',
                    trigger: 'blur'
                }],
                password: [{
                        required: true,
                        message: 'Please fill in the password.',
                        trigger: 'blur'
                    },
                    {
                        type: 'string',
                        min: 6,
                        message: 'The password length cannot be less than 6 bits',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    computed: {
        get: function(){
            console.log('-------------asdasdasd')
            if(!this.isLogin){
                alert("Login error")
            }
            return this.classJudge
        },
    },

    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    //this.$Message.success('Success!');
                    console.log('-------------this.data', this.$data);
                    this.login(this.$data.formInline)
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        ...mapActions('global', [
            'login'
        ]),
        ...mapState('global', [
            'isLogin'
        ]),
    }
}
</script>
