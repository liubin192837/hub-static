import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Upload from './views/Upload.vue'
import NavBar from './views/NavBar.vue'
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
               meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
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
                meta: {
                    requireAuth: true, 
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
                meta: {
                    requireAuth: true,
                },
            },
        ]
    }
)

router.beforeEach((to, from, next) => {
    console.log("..................beforeEach");
    if (to.meta.requireAuth) {
        if (Global.state.token) {
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
})

export default router;
