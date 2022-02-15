/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组建，它是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue实力对象 --- vm
// new Vue({
//   // 完成了功能：将app组件放入容器中
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:"#app",
  // h参数 是一个创建元素的方法
  render: h => h(App)
  // template:`<h1>你好</h1>`,
  // components:{App}
})
