<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ item.name }}</span>
        <el-button class="button" text @click="deleteItem">Delete</el-button>
      </div>
    </template>
    <div>{{ item.cost }}</div>
    <div>{{ item.count }}</div>
  </el-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: Object
  },
  methods: {
    deleteItem() {
      this.removeItem(this.item.id)
    },
    ...mapActions('cart', ['removeItem'])
  },
}
</script>


<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>