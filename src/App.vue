<template>
  <div>
    <h1>Working on Form</h1>
  </div>
  <hr />
  <TheNavigationVue @set-page="setActivePage"></TheNavigationVue>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigationVue from "./components/nav/TheNavigation.vue";
export default {
  name: "App",
  components: { TheNavigationVue },
  data() {
    return {
      activePage: "TheTeamListVue",
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
        { id: "u3", fullName: "Julie Jones", role: "Engineer" },
        { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
        { id: "u5", fullName: "Marie Smith", role: "Consultant" },
      ],
      contact: [
        {
          id: "num1",
          name: "Akash",
          contacts: ["phone - 7411787050", "home - 2245655"],
        },
        {
          id: "num2",
          name: "Gowda",
          contacts: ["phone - 7878787878"],
        },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
      contact: this.contact,
    };
  },
  methods: {
    setActivePage(val) {
      this.activePage = val;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  user-select: none;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
h1 {
  text-align: center;
}
</style>
