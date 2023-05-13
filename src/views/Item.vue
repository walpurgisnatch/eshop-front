<template>
  <div>
    <el-row :gutter="20">
      <el-col class="centered" :offset="1" :span="14">
        <el-carousel class="carousel" trigger="click" height="450px">
          <el-carousel-item v-for="picture in item.pictures" :key="picture">
            <el-image class="carousel-item justify-center" fit="cover" :src="picture" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :offset="1" :span="8">
        <h2 class="title">{{ item.name }}</h2>
        <br />
        <div>Chars</div>
        <br />

        <div class="cost">{{ item.cost }} P</div>
        <el-input-number
          v-model="count"
          :min="1"
          :max="10"
          @click="prevent"
          @change="handleChange"
          class="count"
        />
        <el-button class="buy-button" @click="toCart">ADD TO CART</el-button>
      </el-col>
    </el-row>
    <el-row>
      <div class="description">
        {{ item.description }}
      </div>
    </el-row>
    <el-row>
      <el-col :offset="6" :span="12">
        <hr />
        <div>{{ commentsTotal }} Comments</div>
        <br />
        <CommentForm :item="item.id" @updateComments="fetchComments" />
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
import { mapActions } from "vuex";
import Comment from "@/components/Comment.vue";
import CommentForm from "@/components/CommentForm.vue";

export default {
  props: ["id"],
  data() {
    return {
      item: {},
      count: 1,
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
      EventService.getCommentsItem(this.id)
        .then((response) => {
          this.comments = response.data;
          this.commentsTotal = this.comments.length;
        })
        .catch((error) => {
          console.log("There was an error: ", error);
        });
    },
    toCart() {
      this.addItem({ item: this.item, count: this.count });
    },
    ...mapActions("cart", ["addItem"]),
  },
  created() {
    EventService.getItem(this.id)
      .then((response) => {
        this.item = response.data;
        this.fetchComments();
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
  },
};
</script>

<style scoped>
.title {
  /* text-align: center; */
}

.cost {
  font-size: 25px;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description {
  margin: 25px 10% 50px;
}

.carousel {
  width: 550px;
}

.carousel-item {
  height: 450px;
  width: 550px;
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
