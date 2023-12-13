<template>
  <section>
    <div class="flex" v-for="item in contact" :key="item.id">
      <h2>{{ item.name }}</h2>
      <router-link :to="'/contact/' + item.id">View Numbers</router-link>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "TheContact",
  inject: ["contact"],
  components: {},
  data() {
    return {};
  },
  mounted() {},
  created() {
    console.log(this.contact);
  },
};
</script>

<style>
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.flex {
  display: flex;
  gap: 100px;
  margin: 20px;
}
</style>
