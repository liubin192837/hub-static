<template>
  <div class="home">
    <el-button type="primary" v-on:click="increment()">counter | {{count}}</el-button>
    <el-button type="success" v-on:click="callApi">发请求</el-button>
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations, mapActions } from 'vuex'
import { MUTATION } from '../constants'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  computed: {
    ...mapState('global', [
      'count',
    ])
  },
  methods: {
    ...mapActions('global', [
      'callApi'
    ]),
    ...mapMutations('global', {
      //onclick中直接使用increment方法名会默认传入event对象到payload
      increment: MUTATION.INCREMENT
    })
  }
}

// 直接通过this.$store访问state,getters,mutations,actions
// getName() {
//   // 异步
//   this.$store.dispatch('global/getName')
// },
// tigger() {
//   // 同步
//   this.$store.commit('global/test', {xxx: 23424})
// }
</script>


