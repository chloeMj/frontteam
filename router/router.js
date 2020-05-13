import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        // 동적 세그먼트는 콜론으로 시작합니다.
        { path: '/', component: HelloWorld }
    ]
})