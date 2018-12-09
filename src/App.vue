<template>
<div id="app">
    <Menu mode="horizontal" theme="dark" active-name="1">
        <MenuItem name="1" to="/">
        <Icon type="ios-paper" />
        Home
        </MenuItem>
        <MenuItem name="2" to="/about">
        <Icon type="ios-people" />
        All-Files
        </MenuItem>
        <MenuItem name="3" to="/upload">
        <Icon type="ios-construct" />
        Upload
        </MenuItem>
    </Menu>

    <!-- <div class="logout">
     Logout
    </div> 
    -->
    <div class="logout">
        <Dropdown trigger="click" style="margin-left: 20px">
            <a href="javascript:void(0)" class="logoutmu">
            Logout
            <Icon type="ios-arrow-down"></Icon>
        </a>
            <DropdownMenu slot="list">
                <a href=""><DropdownItem>Logout</DropdownItem></a>
                <a href=""><DropdownItem>Switch User</DropdownItem></a>
                <a href=""><DropdownItem>Manage</DropdownItem></a>
            </DropdownMenu>
        </Dropdown>
    </div>
    <div class="container">
        <router-view />
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

<style lang="scss">
@import './style/color.scss';
@import './style/layout.scss';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;

    .container {
        padding: 30px;
    }
}
</style>

<!-- 
1. 引用组件 import HelloWorld from './components/HelloWorld.vue'
-->
