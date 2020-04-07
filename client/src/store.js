import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

   
export const store = new Vuex.Store({
    state: {
        sepetUrunleri: [],
        currentUser: { }
    },
    mutations: {
        urunEkle(state, product) {
            state.sepetUrunleri.push(product)
        },
        CIKISYAP(state) {
            state.currentUser = {}
        },
        GIRISYAP(state, user) {
            state.currentUser = user;
        }
    },
    actions: {
        urunEkle(context, product) {
            
            context.commit('urunEkle', product)
        },/*
        urunSil(context,urunId){
            
        }*/
        cikisYap({ commit }) {
            commit('CIKISYAP')
        },
        girisYap({ commit },user) {
            commit('GIRISYAP', user);
        },

        
    },
    getters: {
        getSepetUrunler(state) {
            return state.sepetUrunleri
        }
    } 
});


