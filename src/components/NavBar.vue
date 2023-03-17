<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router=true

  >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/profile">Profile</el-menu-item>
      <el-menu-item class="right-one" index="/about">About</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "Home",
    };
  },
  methods: {     

  },
};
</script>

<style scoped>
.el-menu {
  margin: 0 25% 50px !important;
}

.right-one {
  float: right !important;
}
</style>
