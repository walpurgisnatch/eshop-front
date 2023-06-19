<template>
  <el-card class="box-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <el-button type="text" @click="handle">{{ article.title }}</el-button>
        <el-button v-if="user && user.role === 0" style="float: right" type="text" @click="deleteArticle"
          >delete</el-button
        >
      </div>
    </template>
    <div v-markdown>
      {{ article.body }}
    </div>
  </el-card>
</template>

<script>
import EventService from '@/services/EventService.js'
import { mapState } from 'vuex'

export default {
  props: {
    article: Object
  },
  data() {
    return {}
  },
  methods: {
    handle() {
      this.$router.push({ name: 'Article', params: { id: this.article.id } })
    },
    deleteArticle() {
      EventService.deleteArticle(this.article.id).then(() => {
        this.$emit('updateArticles')
      })
    }
  },
  computed: mapState('user', ['user'])
}
</script>

<style scoped>
.box-card {
  margin-bottom: 25px;
  width: 100%;
}
</style>
