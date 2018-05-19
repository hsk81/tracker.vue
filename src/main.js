import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.config.devtools = false;

Number.prototype.pad = function (size) {
  var string = String(this);
  while (string.length < (size || 2)) {
    string = '0' + string;
  }
  return string;
}

window.VM = new Vue({
  mounted: function () {
    window.APP = App;
  },
  render: h => h(App),
});

window.VM.$mount('#app');
