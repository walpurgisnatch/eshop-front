<template>
  <div class="home">
    <el-row :gutter="20">
      <ArticleCard
        class="articleCard"
        v-for="article in articles"
        :key="article.id"
        :article="article"
        @updatearticles="fetchArticles"
      />
    </el-row>
    <el-pagination
      class="pagination"
      hide-on-single-page="true"
      @current-change="pagination"
      :page-size="pageSize"
      :page-count="pages"
      layout="prev, pager, next"
    />
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Articles",
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [],
      pages: 2,
      pageSize: 5
    };
  },
  methods: {
    fetchArticles(limit, offset) {
      EventService.getArticles(limit, offset-1)
        .then((response) => {
          this.articles = response.data[0];
          this.pages = response.data[1];
        })
        .catch((error) => {
          console.log("There was an error: " + error);
        });
    },
    pagination(num) {
      this.fetchArticles(this.pageSize, num)
    }
  },
  created() {
    this.fetchArticles(this.pageSize, 1);
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}

.v1 {
  border-left: 2px solid #dfdfdf;
  height: 500px;
}

.articleCard {
  margin: 15px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
