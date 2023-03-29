<template>
  <div>
    <h2 class="title">{{ item.name }}</h2>
    <div class="description">{{ item.description }}</div>
  </div>
</template>

<script>
// import EventService from "@/services/EventService.js";

export default {
  props: { 
    item: Object
  },
  data() {
    return { };
  },
  methods: {
    // fetchItem() {
    //   EventService.getItem(1)
    //     .then((response) => {
    //       this.items = response.data;
    //     })
    //     .catch((error) => {
    //       console.log("There was an error: " + error.response);
    //     });
    // },
  },
  computed: {  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.item {
  margin: 0 25px 25px;
  height: 400px;
  width: 100%;
  border: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.item:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}
.form {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding-right: 40px;
}
</style>
