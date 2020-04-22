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

        },
        {
            path: '/sertifikalarimiz',
            name: 'SertifikaPage',
            component: lazyLoad('SertifikaPage')

        },
        {
            path: '/hesapno',
            name: 'HesapPage',
            component: lazyLoad('HesapPage')

        },
        {
            path: '/magazalar',
            name: 'StorePage',
            component: lazyLoad('StorePage')

        },
        {
            path: '/iletisim',
            name: 'ContactPage',
            component: lazyLoad('ContactPage')

        },
        {
            path: '/sepet',
            name: 'sepetPage',
            component: lazyLoad('sepetPage')
        },
        {
            path: '/product',
            name: 'ProductPage',
            component: lazyLoad('ProductPage')
        },
        {
            path: '/registration',
            name: 'RegistrationPage',
            component: lazyLoad('RegistrationPage')
        },
        {
            path: '/satisnoktasianketi',
            name: 'SatisNoktaPage',
            component: lazyLoad('SatisNoktaPage')
        }


    ],
    mode: 'history'
});