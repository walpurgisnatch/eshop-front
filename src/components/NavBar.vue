<template>
  <div class="banner"></div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router="true"
  >
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/articles">Articles</el-menu-item>
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

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  margin-bottom: -2%;
  box-shadow: 0 0 11px 11px white inset;
}

.el-menu {
  margin: 0 25% 50px !important;
  background-color: transparent;
  justify-content: space-evenly;
}

.el-menu-item {
  &:hover {
    background-color: transparent !important;
  }
}

.right-one {
  float: right !important;
}
</style>
