import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


// 左邊這塊
var schedule = {}
var emps = [
    {id: 1, name: 'frank', on: null, off: null},
    {id: 2, name: 'jeff', on: null, off: null},
]

function enter(id) {
    const emp = emps.find(emp => emp.id === id)
    if (emp) {
        if (emp.on === null) emp.on = new Date()
        else emp.off = new Date()
        // console.log(schedule)
        schedule = {...schedule, [emp.id]: emp}
    }
    // this.$set(this.schedule, key, val)
    // schedule[key] = val
}

enter(1) // {1: {name: 'frank', on: date}}
enter(1) // {1: {name: 'frank', on: date, off: date}}
enter(2) // {1: {name: 'frank', on: date, off: date}, 2: {name: 'jeff', on: date}}
enter(3) // {1: {name: 'frank', on: date, off: date}, 2: {name: 'jeff', on: date}}

console.log(schedule)