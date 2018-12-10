<template>
  <div>
    <router-view name="navBar"/>
    <div class="container"><router-view /></div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
        // HelloWorld
    }
  }
</script>

<style lang="scss">
  .container {
      padding: 30px;
  }
</style>

<!-- 
1. 引用组件 import HelloWorld from './components/HelloWorld.vue'
-->
