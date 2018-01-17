// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

Vue.component('todo-item', {
  template: `
    <li>
      This is a todo
    </li>
   `
});

Vue.component('component-with-props', {
  props: ['myprop'],
  template: `
    <div>
      {{myprop}}
    </div>
  `
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
