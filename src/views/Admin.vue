<template>
  <div>
    <el-button type="text" @click="createItem">Create Item</el-button>
    <br />
    <el-button type="text" @click="createArticle">Create Article</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    createItem() {
      this.$router.push({ name: 'CreateItem' })
    },
    createArticle() {
      this.$router.push({ name: 'CreateArticle' })
    }
  }
}
</script>
