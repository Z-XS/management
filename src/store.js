import Vue from "vue"
import Vuex from 'vuex'
import {getFoods} from './utils/index'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        getress: ''
    },
    mutations: {
        getFoods (state,getress) {
            state.getress = getress
        }
    },
    actions: {
        async getFoods({commit},pro) {
            const result = await getFoods(pro.type,pro.url,pro.data)
            commit('getFoods',result)
        }
    }
})