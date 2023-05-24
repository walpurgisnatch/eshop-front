<template>
  <div>
    <el-row :gutter="20">
      <el-col :offset="6" :span="12">
        <h1 class="title">{{ article.title }}</h1>
        <br />
        <div v-markdown>
          {{ article.body }}
        </div>
        <br />
        <hr />
        <div>{{ commentsTotal }} Comments</div>
        <br />
        <CommentForm :article="article.id" @updateComments="fetchComments" />
        <Comment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          @updateComments="fetchComments"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";

export default {
  props: ["id"],
  data() {
    return {
      article: {},
      comments: [],
      commentsTotal: 0,
    };
  },
  components: {
    Comment,
    CommentForm,
  },
  methods: {
    fetchComments() {
      EventService.getCommentsArticle(this.id)
        .then((response) => {
          this.comments = response.data;
          this.commentsTotal = this.comments.length;
        })
        .catch((error) => {
          console.log("There was an error: ", error.response);
        });
    },
  },
  created() {
    EventService.getArticle(this.id)
      .then((response) => {
        this.article = response.data;
        this.fetchComments();
      })
      .catch((error) => {
        console.log("There was an error: ", error.response);
      });
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
