<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <el-tabs :tab-position="left" class="demo-tabs">
          <el-tab-pane label="Create"><ArticleForm /></el-tab-pane>
          <el-tab-pane label="Preview"><ArticleView :article="article" /></el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'
import ArticleView from '@/components/ArticleView.vue'

export default {
  data() {
    return {
      article: {
        title: '',
        body: ''
      }
    }
  },
  components: {
    ArticleForm,
    ArticleView
  },
  methods: {
    updateArticle(article) {
      this.article = article
    }
  }
}
</script>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
