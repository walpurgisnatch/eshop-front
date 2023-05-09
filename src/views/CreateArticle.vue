<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <ArticleForm />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  components: {
    ArticleForm,
  },
};
</script>

<style scoped></style>
