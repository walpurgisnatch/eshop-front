<template>
  <div>
    <el-input v-model="article.title" placeholder="Title" clearable />
    <textarea v-model="article.body" class="body" />
    <el-button type="primary" @click="submit">Create</el-button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    return {
      article: {
        title: "",
        body: "",
        attachments: null
      },
      rules: {
        body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      EventService.createArticle(this.article)
        .then((response) => {
          if (response.status == 201) {
            this.$router.push({
              name: "Article",
              params: { id: response.data },
            });
          }
        })
        .catch((error) => {
          console.log("There was an error: ", error);
        });
    },
  },
  computed: {  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.article {
  margin: 0 25px 25px;
  height: 400px;
  width: 100%;
  border: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.article:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
}
.form {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  padding-right: 40px;
}
</style>
