// 路由设置

import Vue    from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use (Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 roles: ['admin','editor']    control the page roles (you can set multiple roles)
 title: 'title'               the name show in sidebar and breadcrumb (recommend set)
 icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
 breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
 activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
 }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path     : '/login',
    component: () => import('@/views/login/index'),
    hidden   : true
  },

  {
    path     : '/404',
    component: () => import('@/views/404'),
    hidden   : true
  },

  {
    path     : '/',
    component: Layout,
    redirect : '/home',
    children : [
      {
        path     : 'home',
        name     : 'Home',
        component: () => import('@/views/home/index'),
        meta     : { title: '首页', icon: 'el-icon-eleme' }
      }
    ]
  },

  {
    path     : '/template',
    component: Layout,
    redirect : '/template/basic/layout',
    name     : 'Template',
    meta     : { title: '模板', icon: 'el-icon-potato-strips' },
    children : [
      {
        path     : 'basic',
        name     : 'Basic',
        meta     : { title: 'Basic' },
        component: () => import('@/views/template/basic/index.vue'),
        children : [
          {
            path     : 'layout',
            name     : 'Layout',
            meta     : { title: 'Layout 布局' },
            component: () => import('@/views/template/basic/layout/index.vue')
          },
          {
            path     : 'container',
            name     : 'Container',
            meta     : { title: 'Container 布局容器' },
            component: () => import('@/views/template/basic/container/index.vue')
          },
          {
            path     : 'button',
            name     : 'Button',
            meta     : { title: 'Button 按钮' },
            component: () => import('@/views/template/basic/button/index.vue')
          },
          {
            path     : 'link',
            name     : 'Link',
            meta     : { title: 'Link 文字链接' },
            component: () => import('@/views/template/basic/link/index.vue')
          }
        ]
      },
      {
        path     : 'form',
        name     : 'Form',
        meta     : { title: 'Form' },
        component: () => import('@/views/template/form/index.vue'),
        children : [
          {
            path     : 'radio',
            name     : 'Radio',
            meta     : { title: 'Radio 单选框' },
            component: () => import('@/views/template/form/radio/index.vue')
          },
          {
            path     : 'checkbox',
            name     : 'Checkbox',
            meta     : { title: 'Checkbox 多选框' },
            component: () => import('@/views/template/form/checkbox/index.vue')
          },
          {
            path     : 'input',
            name     : 'Input',
            meta     : { title: 'Input 输入框' },
            component: () => import('@/views/template/form/input/index.vue')
          },
          {
            path     : 'inputNumber',
            name     : 'InputNumber',
            meta     : { title: 'InputNumber 计数器' },
            component: () => import('@/views/template/form/inputNumber/index.vue')
          }
        ]
      },
      {
        path     : 'data',
        name     : 'Data',
        meta     : { title: 'Data' },
        component: () => import('@/views/template/data/index.vue'),
        children : [
          {
            path     : 'badge',
            name     : 'Badge',
            meta     : { title: 'Badge 标记' },
            component: () => import('@/views/template/data/badge/index.vue')
          },
          {
            path     : 'descriptions',
            name     : 'Descriptions',
            meta     : { title: 'Descriptions 描述列表' },
            component: () => import('@/views/template/data/descriptions/index.vue')
          }
        ]
      },
      {
        path     : 'other',
        name     : 'Other',
        meta     : { title: 'Other' },
        component: () => import('@/views/template/other/index.vue'),
        children : [
          {
            path     : 'dialog',
            name     : 'Dialog',
            meta     : { title: 'Dialog 对话框' },
            component: () => import('@/views/template/other/dialog/index.vue')
          },
          {
            path     : 'card',
            name     : 'Card',
            meta     : { title: 'Card 卡片' },
            component: () => import('@/views/template/other/card/index.vue')
          }
        ]
      }
    ]
  },

  {
    path     : '/example',
    component: Layout,
    redirect : '/example/table',
    name     : 'Example',
    meta     : { title: '示例', icon: 'el-icon-s-help' },
    children : [
      {
        path     : 'table',
        name     : 'Table',
        component: () => import('@/views/example/table/index'),
        meta     : { title: '表格', icon: 'table' }
      },
      {
        path     : 'tree',
        name     : 'Tree',
        component: () => import('@/views/example/tree/index'),
        meta     : { title: '树', icon: 'tree' }
      },
      {
        path     : 'tab',
        name     : 'Tab',
        component: () => import('@/views/example/tab/index'),
        meta     : { title: '标签页', icon: 'el-icon-collection-tag' }
      }
    ]
  },

  {
    path     : '/form',
    component: Layout,
    children : [
      {
        path     : 'index',
        name     : 'FormAnother',
        component: () => import('@/views/form/index'),
        meta     : { title: '信息管理', icon: 'form' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router ({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes        : constantRoutes
})

const router = createRouter ()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter ()
  router.matcher = newRouter.matcher // reset router
}

export default router
