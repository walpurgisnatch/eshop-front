<template>
  <div class="home">
    <el-row :gutter="20">
      <ItemCard
        class="itemCard"
        v-for="item in items"
        :key="item.id"
        :item="item"
        @updateItems="fetchItems"
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
import ItemCard from "@/components/ItemCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Home",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [],
      pages: 2,
      pageSize: 10
    };
  },
  methods: {
    fetchItems(limit, offset) {
      EventService.getItems(limit, offset-1)
        .then((response) => {
          this.items = response.data[0];
          this.pages = response.data[1];
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
    pagination(num) {
      this.fetchItems(this.pageSize, num)
    }
  },
  created() {
    this.fetchItems(this.pageSize, 1);
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

.itemCard {
  margin: 15px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
