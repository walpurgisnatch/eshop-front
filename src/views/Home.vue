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
      :hide-on-single-page="true"
      @current-change="pagination"
      :page-size="limit"
      :page-count="pages"
      layout="prev, pager, next"
    />
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    ItemCard,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions("items", ["fetchItems"]),
    pagination(num) {
      this.fetchItems(num);
    },
  },
  created() {
    this.fetchItems(1);
  },
  computed: {
    ...mapGetters("items", ["items", "pages"]),
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
