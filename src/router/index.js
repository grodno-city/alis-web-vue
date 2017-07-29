import Vue from 'vue';
import Router from 'vue-router';
import DatePicker from '@/components/DatePicker';
import Book from '@/components/Book';
import Content from '@/components/Content';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DatePicker,
    },
    {
      path: '/book',
      component: Book,
    },
    {
      path: '/content',
      component: Content,
    },
  ],
  mode: 'history',
});
