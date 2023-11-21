import { createRouter, createWebHistory } from 'vue-router'
import ItemPage from '@/views/Item.vue';
import Grid from '@/views/Grid.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/tasks/', 
      name: 'Grid',
      component: Grid,
    },
    {
      path: '/tasks/item/:id', 
      name: 'Item',
      component: ItemPage,
    },
  ],
})

export default router
