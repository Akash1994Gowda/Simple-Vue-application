<template>
  <section>
    <h2>{{ teamName }} <span>Total Members</span> {{ memLength }}</h2>
    <ul>
      <TheUserItem
        v-for="item in members"
        :key="item.id"
        :fullName="item.fullName"
        :role="item.role"
      ></TheUserItem>
    </ul>
    <router-link v-if="$route.params.teamId !== 't2'" to="/teams/t2"
      >Go to team 2</router-link
    >
  </section>
</template>

<script>
import TheUserItem from "../users/TheUserItem.vue";
export default {
  name: "TheTeamMembers",
  components: { TheUserItem },
  inject: ["users", "teams"],
  data() {
    return {
      members: [],
      teamName: "",
      memLength: 0,
    };
  },
  created() {
    const getTeamId = this.$route.params.teamId;
    const selectedItem = this.teams.find((item) => item.id === getTeamId);
    const members = selectedItem.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUser = this.users.find((item) => item.id === member);
      selectedMembers.push(selectedUser);
    }
    this.members = selectedMembers;
    this.teamName = selectedItem.name;
    this.memLength = members.length;
  },
  mounted() {},
  watch: {
    $route() {
      const getTeamId = this.$route.params.teamId;
      const selectedItem = this.teams.find((item) => item.id === getTeamId);
      const members = selectedItem.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((item) => item.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedItem.name;
      this.memLength = members.length;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
