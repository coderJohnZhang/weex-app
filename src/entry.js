/*global Vue*/

/* weex initialized here, please do not move this line */
const router = require('./router');
const App = require('@/index.vue');
/* eslint-disable no-new */
new Vue(Vue.util.extend({
  el: '#root',
  router
}, App));
router.push('/');

/**
 *  路由相关
 */
router.beforeEach((to, from, next) => {
  console.log("router beforeEach from path = " + from.path + ", to path = " + to.path);
  next();
})

router.afterEach(transition => {
  console.log("router afterEach");
});