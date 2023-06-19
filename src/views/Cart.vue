<template>
  <div style="text-align: center">
    <el-row :gutter="20">
      <el-col :span="16">
        <CartItem class="itemCard" v-for="item in items" :key="item.id" :item="item" />
      </el-col>
      <el-col class="centered" :span="8">
        <el-button class="button" text @click="clearItems">Proceed</el-button>
        <el-button class="button" text @click="clearItems">Clear Items</el-button>
      </el-col>
      <div class="total">Total cost {{ totalCost }}</div>
    </el-row>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  components: {
    CartItem
  },
  methods: {
    ...mapActions('cart', ['clearItems'])
  },
  computed: {
    ...mapGetters('cart', ['items', 'totalCost'])
  }
}
</script>

<style scoped>
.itemCard {
  margin: 15px;
}

.centered {
  display: flex;
  align-items: center;
}

.total {
  display: block;
}
</style>
