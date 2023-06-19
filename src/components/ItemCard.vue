<template>
  <el-card class="box-card" shadow="hover" @click="handle" :item="item">
    <el-image class="image" :src="item.thumbnail" fit="cover" />
    <div class="cost">{{ item.cost }}</div>
    <div class="name">{{ item.name }}</div>
    <div class="icons">
      <el-button type="text" @click="toCart">
        <el-icon><Handbag /></el-icon>
      </el-button>
    </div>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    item: Object
  },
  data() {
    return {}
  },
  methods: {
    handle() {
      this.$router.push({ name: 'Item', params: { id: this.item.id } })
    },
    toCart(e) {
      e.stopPropagation()
      this.addItem({ item: this.item })
    },
    ...mapActions('cart', ['addItem'])
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  width: 250px;
  height: 325px;
  margin-bottom: 25px;

  &:hover {
    cursor: pointer;
    .name {
      color: black;
    }
  }
}

.cost {
  font-size: 24px;
  color: gray;
  text-align: right;
}

.name {
  color: dimgray;
}

.icons {
  text-align: right;
}

.image {
  width: 200px;
  height: 200px;
  padding: 5px 5px 0 5px;
}
</style>
