<template>
  <div class="banner"></div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true">
    <el-menu-item class="item" index="/">Home</el-menu-item>
    <el-menu-item class="item" index="/articles">Articles</el-menu-item>
    <el-menu-item class="item right-one" index="/about">About</el-menu-item>
    <div class="item">
      <el-input v-model="search" :onchange="filter" class="search" placeholder="Type something">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </div>
    <el-menu-item class="item" index="/cart"><Cart /></el-menu-item>
  </el-menu>
</template>

<script>
import Cart from '@/components/Cart.vue'
import { Search } from '@element-plus/icons-vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Cart,
    Search
  },
  data() {
    return {
      activeIndex: 'Home',
      search: ''
    }
  },
  methods: {
    ...mapActions('items', ['setFilters']),
    filter() {
      const filters = {
        name: this.search
      }
      this.setFilters(filters)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-image: url('@/assets/banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  margin-bottom: -2%;
  box-shadow: 0 0 11px 11px white inset;
}

.el-menu {
  margin: 0 15% 50px !important;
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

.search {
  width: 150px;
  height: 40px;
}

.el-menu--horizontal > .el-menu-item {
  height: 50px;
  align-items: end;
}
</style>
