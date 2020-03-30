import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

function lazyLoad(view) {
    return () => import(`@/pages/${view}.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'MainPage',
            component: lazyLoad('MainPage')
        },
        {
            path: '/Afia',
            name: 'AfiaPage',
            component: lazyLoad('AfiaPage')
        },
       
        {

            path: '/LoginPage',
            name: 'LoginPage',
            component: lazyLoad('LoginPage')

        },
      

    ]
});