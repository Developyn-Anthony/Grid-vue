import Vue from 'vue'
import App from './App.vue'

let shared = [
  {
    nameId: 1001,
    fName: 'Anthony',
    lName: 'White',
    age: 20
  },
];

shared.install = function () {
  Object.defineProperty(Vue.prototype, '$Globals', {
    get() { return shared }
  })
}
Vue.use(shared);


Vue.config.productionTip = false

new Vue({
  data: {
    shared: [
      {
        nameId: 1001,
        fName: 'Anthony',
        lName: 'White',
        age: 20
      },
    ]
  },
  render: h => h(App),
}).$mount('#app')
