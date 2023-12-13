<template>
  <section>
    <div v-for="item in theListContact" :key="item">
      <h1>{{ item }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheViewContact",
  inject: ["contact"],
  components: {},
  data() {
    return {
      theListContact: [],
    };
  },
  created() {
    console.log(this.$route.params.num);
    const getParams = this.$route.params.num;
    const getContact = this.contact.find((item) => item.id === getParams);
    const selectedContact = getContact.contacts;
    console.log(selectedContact);
    this.theListContact = selectedContact;
  },
};
</script>
