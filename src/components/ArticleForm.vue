<template>
  <div>
    <el-input v-model="article.title" placeholder="Title" clearable />
    <el-upload
      v-model:file-list="fileList"
      action="http://localhost:5000/api/items/photos"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="onUpload"
      class="uploader"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <div class="columns">
      <el-input
        v-model="article.body"
        class="body"
        :rows="25"
        type="textarea"
        placeholder="Body"
      />
    </div>
    <el-button type="primary" @click="submit">Create</el-button>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import { ref } from "vue";

export default {
  data() {
    return {
      article: {
        title: "",
        body: "",
      },
      fileList: [],
      dialogImageUrl: ref(""),
      dialogVisible: ref(false),
      rules: {
        body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    onChange() {
      this.$emit('updateArticle', this.article)
    },
    onUpload() {
     const name = this.fileList[this.fileList.length - 1].name
      this.article.body += `![alt image](${name} "title")`;
    },
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
    handleRemove(uploadFile, uploadFiles) {
      console.log(uploadFile, uploadFiles);
    },
    handlePictureCardPreview(uploadFile) {
      this.dialogImageUrl = uploadFile.url;
      this.dialogVisible = true;
    },
  },
  computed: {
  },
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
.uploader {
  margin: 15px 0;
}
.columns {
  display: flex;
}
</style>
