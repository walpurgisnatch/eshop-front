<template>
<div style="text-align: center">  
  <el-row :gutter="20">
      <CartItem
          class="itemCard"
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
    </el-row>
    <el-button class="button" text @click="clearCart">Clear Items</el-button>
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
</style>