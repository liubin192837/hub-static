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
    <div class="logout">
        <Dropdown trigger="click" style="margin-left: 20px" @on-click="logout">
            <a href="javascript:void(0)" class="logoutmu">
                Logout
                <Icon type="ios-arrow-down" ></Icon>
           </a>
            <DropdownMenu slot="list">
                <DropdownItem>Logout</DropdownItem>
                <DropdownItem v-if="isRoot">Manage</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>

</div>
</template>

<style lang="scss">
@import '../style/color.scss';
@import '../style/layout.scss';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $font-color;
}
</style>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    created: function () {
        if (!this.isLogin) {
            this.checkLogin()
        }
    },
    computed: {
        ...mapState('global', [
            'isRoot',
            'isLogin'
        ])
    },
    methods: {
        ...mapActions('global', [
            'logout',
            'checkLogin'
        ]),
    }
}
</script>
