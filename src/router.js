import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';

import Gallery from './pages/Gallery.vue';
import Contatti from './pages/Contatti.vue';
import PrenotaServizio from './pages/PrenotaServizio.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },

      {
        path: '/',
        name: 'contatti',
        component: Contatti,
      },   
      {
        path: '/',
        name: 'gallery',
        component: Gallery,
      },   
      {
        path: '/prenota-servizio',
        name: 'prenotaServizio',
        component: PrenotaServizio,
      },

    ]
  });
  
  export { router };