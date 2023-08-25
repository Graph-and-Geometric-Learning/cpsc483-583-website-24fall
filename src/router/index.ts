// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Logistics from '../pages/Logistics.vue'
import Content from '../pages/Content.vue'
import Syllabus from '../pages/Syllabus.vue'
import Policies from '../pages/Policies.vue'
import OfficeHours from '../pages/OfficeHours.vue'
import Staff from '../pages/Staff.vue'

const routes = [
  {
    path: '/',
    component: Logistics
  },
  {
    path: '/logistics',
    component: Logistics
  },
  {
    path: '/content',
    component: Content,
  },
  {
    path: '/syllabus',
    component: Syllabus,
  },
  {
    path: '/policies',
    component: Policies,
  },
  {
    path: '/officehours',
    component: OfficeHours,
  }, {
    path: '/staff',
    component: Staff
  }
]

const router = createRouter({
  base: import.meta.env.BASE_URL,
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
