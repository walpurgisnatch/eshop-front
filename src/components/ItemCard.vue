<template>
  <el-card class="box-card" shadow="hover">
    <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
    <div style="padding: 14px">
      <el-button type="text" @click="handle" :item="item">{{ item.name }}</el-button>
      <div class="description">{{ item.description }}</div>   
      <div class="cost">{{ item.cost }}</div>          
    </div>
  </el-card>
</template>

<script>
import EventService from "@/services/EventService.js";
import { mapState } from "vuex";

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
    deleteItem() {
      EventService.deleteItem(this.item.id).then(() => {
        this.$emit("updateItems");
      });
    },
  },
  computed: mapState("user", ["user"]),
};
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
}
</style>
