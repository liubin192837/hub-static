import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Upload from './views/Upload.vue'
import NavBar from './views/NavBar.vue'
import AddUser from './views/AddUser.vue'
import Global from './store/modules/global'

Vue.use(Router)

const router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                components: {
                    navBar: NavBar,
                    default: Home
                },
            },
            {
                path: '/about',
                name: 'about',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                components: {
                    navBar: NavBar,
                    default: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                },

            },
            {
                path: '/login',
                name: 'login',
                components: {
                    //navBar: NavBar,
                    default: Login
                },

            },
            {
                path: '/upload',
                name: 'upload',
                components: {
                    navBar: NavBar,
                    default: Upload
                },
            },
            {
                path: '/addUser',
                name: 'addUser',
                components: {
                    navBar: NavBar,
                    default: AddUser
                },

            },
        ]
    }
)

/* router.beforeEach((to, from, next) => {
    console.log("..................beforeEach");
    if (to.meta.requireAuth) {
        sessionStorage.setItem();
        if (Global.state.isLogin) {
            console.log("..................ok");
            next();
        } else {
            next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                }
            )
        }
    } else {
        next()
    }
}) */

export default router;
