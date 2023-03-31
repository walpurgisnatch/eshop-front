<template>
  <div>
    <el-row :gutter="20">
      <el-col :offset="2" :span="12">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
      </el-col>
      <el-col :span="10">
        <h2 class="title">{{ item.name }}</h2>
        <br />
        <div>
          {{ item.description }}
        </div>
        <br />

        <el-button @click='toCart'>Buy</el-button>

      </el-col>
    </el-row>
    <!-- <el-row>
      <el-col :offset="6" :span="12">
        <hr />
        <div>{{ commentsTotal }} Comments</div>
        <br />
        <CommentForm :item="item.id" @updateComments="fetchComments" />
        <Comment
          v-for="comment in item.comments"
          :key="comment.id"
          :comment="comment"
          @updateComments="fetchComments"
        />
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import { mapActions } from 'vuex'
// import Comment from "@/components/Comment.vue";
// import CommentForm from "@/components/CommentForm.vue";

export default {
  props: ["id"],
  data() {
    return {
      item: {},
      // commentsTotal: 0,
    };
  },
  components: {
    // Comment,
    // CommentForm,
  },
  methods: {
    // fetchComments() {
    //   EventService.getComments(this.id)
    //     .then((response) => {
    //       this.item.comments = response.data;
    //       this.commentsTotal = this.item.comments.length;
    //     })
    //     .catch((error) => {
    //       console.log("There was an error: ", error.response);
    //     });
    // },
    toCart() {
      this.addItem(this.item)
    },
    ...mapActions('cart', ['addItem'])
  },
  created() {
    EventService.getItem(this.id)
      .then((response) => {
        this.item = response.data;
        // this.commentsTotal = this.item.comments.length;
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
