<template>
  <div>
    <el-row :gutter="20">
      <el-col class="centered" :offset="2" :span="14">
        <el-image
          src="https://twinfinite.net/wp-content/uploads/2022/11/Chainsaw-Man-Anime-Makima-Staring-down-at-Denji-Screenshot.jpg?fit=1200%2C675"
          class="image"
          fit="cover"
        />
      </el-col>
      <el-col :span="8">
        <h2 class="title">{{ item.name }}</h2>
        <br />
        <div>Chars</div>
        <br />

        <el-input-number
          v-model="count"
          :min="1"
          :max="10"
          @click="prevent"
          @change="handleChange"
          class="count"
        />
        <el-button class="buy-button" @click="toCart">Buy</el-button>
      </el-col>
    </el-row>
    <el-row>
      <div class="description">
        {{ item.description }}
      </div>
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
import { mapActions } from "vuex";
// import Comment from "@/components/Comment.vue";
// import CommentForm from "@/components/CommentForm.vue";

export default {
  props: ["id"],
  data() {
    return {
      item: {},
      count: 1,
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
      this.addItem({ item: this.item, count: this.count });
    },
    ...mapActions("cart", ["addItem"]),
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

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  margin: 25px 10% 0;
}

.image {
  width: 450px;
  height: 450px;
}

.count {
  width: 250px;
  margin: 0 0 25px 50px;
}

.buy-button {
  width: 250px;
  height: 50px;
  margin-left: 50px;
}
</style>
