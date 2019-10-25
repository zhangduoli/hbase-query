import Vue from 'vue'
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import ElementUi from 'element-ui'
 
import tableList from '@/page/table_list'
import hbaseQuery from '@/page/table_query'
import hbaseSelect from '@/page/table_select'
import '@/theme-et/index.css'
 
Vue.use(Router) /* 使用路由 */
Vue.use(ElementUi)
 
export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到组件 */
    {
      path: '/',//默认页面
      name: 'tableList',
      component: tableList  /* 注册组件 */
    },
    {
      path: "/select",
      name: 'select',
      component: hbaseSelect
    },
    {
      path: "/query",
      name: 'query',
      component: hbaseQuery
    }
  ]
})
