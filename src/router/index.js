import { createRouter, createWebHistory } from 'vue-router'
import Components from "../views/Components.vue";

const routes = [
  {
    path: '/',
    name: 'Courses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
  },
  {
    name: 'course',
    path: '/courses/:courseName',
    component: () => import(/* webpackChunkName: "course" */ '../components/course/CourseLanding.vue'),
    props: true
  },
  {
    name: 'courseModule',
    path: '/courses/:courseName/module/:moduleName',
    component: () => import(/* webpackChunkName: "course" */ '../components/course/courseModule/ModuleLanding.vue'),
    props: true
  },
  {
    path: '/components',
    name: 'Components',
    component: Components,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
