import Vue from "vue"
import Vuex from 'vuex'
import {getFoods,postUserMessage} from './utils/index'
import {getCookie} from './utils/cookie'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        getress: '',
        adminInfo: '',
        username: ''
    },
    mutations: {
        getFoods (state,getress) {
            state.getress = getress
        },
        getadminInfo (state,admininfo) {
            state.adminInfo = admininfo
        }
    },
    actions: {
        async getFoods({commit},pro) {
            const result = await getFoods(pro.type,pro.url,pro.data)
            commit('getFoods',result)
        },      
        setadminInfo({commit},admininfo) {
            commit('getadminInfo',admininfo)
        },
        async getadminInfo({commit}) {
            const id = getCookie('ID')
            console.log(id)
            if(id) {
                const res = await postUserMessage({id})
                console.log(res)
                commit('getadminInfo',res.data)
            }
        }
    }
})