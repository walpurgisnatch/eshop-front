<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <ItemForm />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ItemForm from '@/components/ItemForm.vue'

export default {
  components: {
    ItemForm
  }
}
</script>

<style scoped></style>
