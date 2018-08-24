import Vue from 'vue';
import Router from 'vue-router';
import RobotBuilder from '../builder/RobotBuilder.vue';
import HomePage from '../Home/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }],
});
