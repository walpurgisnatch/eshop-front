<template>
  <el-row>
    <el-icon :size="36" class="icon">
      <ShoppingCart v-if="itemsCount == 0" />
      <ShoppingCartFull v-else />
    </el-icon>
    <div class="count">{{ itemsCount }}</div>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('cart', ['itemsCount'])
}
</script>

<style scoped>
.count {
  font-size: 15px;
}

.icon {
  height: auto;
}
</style>
