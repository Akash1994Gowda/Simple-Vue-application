import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import TheTeamList from "./components/teams/TheTeamList.vue";
import TheUserList from "./components/users/TheUserList.vue";
import TheContact from "./components/teams/TheContact.vue";
import TheAbout from "./components/teams/TheAbout.vue";
import TheTeamMembers from "./components/teams/TheTeamMembers.vue";
import TheViewContact from "./components/teams/TheViewContact.vue";
import TheNotFound from "./components/users/TheNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      name: "teams",
      path: "/teams",
      component: TheTeamList,
      children: [
        {
          name: "team-member",
          path: ":teamId",
          component: TheTeamMembers,
          beforeEnter(to, from, next) {
            next(true);
          },
        },
      ],
    },
    { path: "/users", component: TheUserList },
    {
      path: "/contact",
      component: TheContact,
      children: [{ path: ":num", component: TheViewContact }],
    },
    { path: "/about", component: TheAbout },

    { path: "/:cathAll(.*)", component: TheNotFound },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

router.beforeEach(function (_, _2, next) {
  next(true);
});

const app = createApp(App);
app.use(router);
app.mount("#app");
