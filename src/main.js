import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
//import components that router will use
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: TeamsList,
      children: [{ path: '/teams/:teamId', component: TeamMembers }],
    },
    { path: '/users', component: UsersList },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    //control scroll here
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
      // if we have saved position scroll back when we click go back
    }
    return { left: 0, top: 0 };
  },
});

//NAVIGATION GUARD - call a built in method before navigation happens
router.beforeEach(function (to, from, next) {
  console.log(to, from);
  //if you put false in next() navigation gets cancelled
  next();
});

const app = createApp(App);
//make app use our router
app.use(router);

app.mount('#app');
