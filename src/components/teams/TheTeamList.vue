<template>
  <ul>
    <router-view></router-view>
    <TheTeamItemsVue
      v-for="item in teams"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :member-count="item.members.length"
    ></TheTeamItemsVue>
  </ul>
</template>

<script>
import TheTeamItemsVue from "./TheTeamItems.vue";
export default {
  name: "TheTeamList",
  components: { TheTeamItemsVue },
  inject: ["teams"],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
