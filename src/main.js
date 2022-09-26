import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
//import components that router will use
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList }, //create endpoint for links
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
//make app use our router
app.use(router);

app.mount('#app');
