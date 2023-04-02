<template>
  <div class="banner"></div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router="true"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <!-- <el-menu-item index="/profile">Profile</el-menu-item> -->
    <el-menu-item class="right-one" index="/about">About</el-menu-item>
    <el-menu-item index="/cart"><Cart /></el-menu-item>
  </el-menu>
</template>

<script>
import Cart from "@/components/Cart.vue";

export default {
  components: {
    Cart,
  },
  data() {
    return {
      activeIndex: "Home",
    };
  },
  methods: {},
};
</script>

<style scoped>
.banner {
  background-image: url('https://www.w3schools.com/css/img_mountains.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  margin-bottom: -2%;
  box-shadow: 0 0 11px 11px white inset;
}

.el-menu {
  margin: 0 25% 50px !important;
  background-color: transparent;
  justify-content: space-evenly;
}

.right-one {
  float: right !important;
}
</style>
