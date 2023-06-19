<template>
  <div>
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <ArticleView :article="article" />
        <hr />
        <div class="comments-total">{{ commentsTotal }} Comments</div>
        <br />
        <CommentForm :article="article.id" @updateComments="fetchComments" />
        <Comment v-for="comment in comments" :key="comment.id" :comment="comment" @updateComments="fetchComments" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import Comment from '@/components/Comment.vue'
import CommentForm from '@/components/CommentForm.vue'
import ArticleView from '@/components/ArticleView.vue'

export default {
  props: ['id'],
  data() {
    return {
      article: {},
      comments: [],
      commentsTotal: 0
    }
  },
  components: {
    Comment,
    CommentForm,
    ArticleView
  },
  methods: {
    fetchComments() {
      EventService.getCommentsArticle(this.id)
        .then((response) => {
          this.comments = response.data
          this.commentsTotal = this.comments.length
        })
        .catch((error) => {
          console.log('There was an error: ', error.response)
        })
    }
  },
  created() {
    EventService.getArticle(this.id)
      .then((response) => {
        this.article = response.data
        this.fetchComments()
      })
      .catch((error) => {
        console.log('There was an error: ', error.response)
      })
  }
}
</script>

<style scoped>
.title {
  text-align: center;
}
.comments-total {
  margin-bottom: 25px;
}
hr {
  margin: 15px 0;
}
</style>
