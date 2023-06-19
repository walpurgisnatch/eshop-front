<template>
  <div>
    <h1 class="title">{{ article.title }}</h1>
    <div v-markdown>
      {{ article.body }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 25px;
}
</style>
