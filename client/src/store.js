import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

   
export const store = new Vuex.Store({
    state: {
        sepetUrunleri: [],
        currentUser:""
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
        },
        CURRENTEYAZ(state, email) {
            state.currentUser = email;    
        }
    },
    actions: {
        urunEkle({commit}, product) {
            
            commit('urunEkle', product)
        },/*
        urunSil(context,urunId){
            
        }*/
        cikisYap({ commit }) {
            commit('CIKISYAP')
        },
        girisYap({ commit },user) {
            commit('GIRISYAP', user);
        },
        currentUseraYaz({ commit }, email) {
            commit('CURRENTEYAZ', email);
        }
        
    },
    getters: {
        getSepetUrunler(state) {
            return state.sepetUrunleri
        }
    } 
});


