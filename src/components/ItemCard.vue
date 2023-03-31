<template>
  <el-card class="box-card" shadow="hover">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="image"
    />
    <div style="padding: 14px">
      <el-button type="text" @click="handle" :item="item">{{
        item.name
      }}</el-button>
      <div class="description">{{ item.description }}</div>
      <div class="cost">{{ item.cost }}</div>
    </div>
    <el-button type="text" @click="toCart">to cart</el-button>
  </el-card>
</template>

<script>
// import EventService from "@/services/EventService.js";
import { mapActions } from 'vuex'

export default {
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    handle() {
      this.$router.push({ name: "Item", params: { id: this.item.id } });
    },
    toCart() {
      this.addItem(this.item)
    },
    ...mapActions('cart', ['addItem'])
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
}
</style>
