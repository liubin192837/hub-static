<template>
  <div id="app">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1" to="/">
            <Icon type="ios-paper" />
            Home
        </MenuItem>
        <MenuItem name="2" to="/about">
            <Icon type="ios-people" />
            About
        </MenuItem>
        <MenuItem name="3" to="/form">
            <Icon type="ios-construct" />
            Form
        </MenuItem>
    </Menu>
    <div class="container">
       <router-view/>
    </div>
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

<style lang="scss" scope>
@import './style/color.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;
  
  .container{
    padding: 30px;
  }
}

</style>

<!-- 
1. 引用组件 import HelloWorld from './components/HelloWorld.vue'
-->