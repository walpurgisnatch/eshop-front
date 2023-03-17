<template>
  <el-card class="box-card" shadow="none">
    <template #header>
      <div class="card-header">
        <span class="username">{{ comment.username }}</span>
        <el-button
          v-if="user && user.role === 0"
          type="text"
          @click="deleteComment"
          >delete</el-button>
      </div>
    </template>
    <div>
      {{ comment.body }}
    </div>
  </el-card>
</template>

<script>
import EventService from "@/services/EventService.js";
import { mapState } from "vuex";

export default {
  props: {
    comment: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteComment() {
      EventService.deleteComment(this.comment.id).then(() => {
        this.$emit("updateComments");
      });
    },
  },
  computed: mapState("user", ["user"]),
};
</script>

<style scoped>
.box-card {
  margin-bottom: 15px;
}
.card-header {
  display: flex;
  justify-content: space-between;
}
.username {
  margin: auto 0;
}
</style>
