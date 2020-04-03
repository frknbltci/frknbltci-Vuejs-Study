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
        {
            path: '/biskuvi',
            name: 'BiskuviPage',
            component: lazyLoad('BiskuviPage')
        },
        {
            path: '/Markalar',
            name: 'markalarPage',
            component: lazyLoad('markalarPage')
            
        }
        , 
        {
            path: '/Markalar',
            name: 'markalarPage',
            component: lazyLoad('markalarPage')

        },
        {
            path: '/satisnoktasianketi',
            name: 'SatisNoktasiPage',
            component: lazyLoad('SatisNoktasiPage')

        },
        {
            path: '/sertifikalarimiz',
            name: 'SertifikalarimizPage',
            component: lazyLoad('SertifikalarimizPage')

        },
        {
            path: '/hesapno',
            name: 'hesapnoPage',
            component: lazyLoad('hesapnoPage')

        },
        {
            path: '/magazalar',
            name: 'magazalarPage',
            component: lazyLoad('magazalarPage')

        },
        {
            path: '/iletisim',
            name: 'iletisimPage',
            component: lazyLoad('iletisimPage')

        },
    
            
        
      

    ],
    mode:'history'
});