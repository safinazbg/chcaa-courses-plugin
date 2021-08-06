import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Components from "../views/Components.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'Courses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Courses.vue')
  },
  {
    name: 'courseModule',
    path: '/module/:moduleName',
    component: () => import(/* webpackChunkName: "course" */ '../components/course/courseModule/CourseModule.vue'),
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
