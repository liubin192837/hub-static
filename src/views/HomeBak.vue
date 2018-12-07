<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" v-on:click="getName">发请求</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    count () {
      return this.$store.getters.getNum
    }
  },
  methods: {
    getName () {
      this.$store.dispatch('global/getName')
      .catch(e => {
        console.log('-------------出错了啊')
      })
    }
  }
}
</script>
