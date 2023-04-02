<template>
<div style="text-align: center">  
  <el-row :gutter="20">
    <el-col :span='16'> 
      <CartItem
          class="itemCard"
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
    </el-col>
    <el-col class="centered" :span='8'>
      <el-button class="button" text @click="clearCart">Proceed</el-button>
      <el-button class="button" text @click="clearCart">Clear Items</el-button>
    </el-col>
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
    clearCart() {
      this.clearItems();
    },
    ...mapActions('cart', ['clearItems'])
  },
  computed: mapGetters('cart', ['items'])
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
</style>