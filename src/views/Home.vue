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
    };
  },
  methods: {
    fetchItems() {
      EventService.getItems()
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          console.log("There was an error: " + error.response);
        });
    },
  },
  created() {
    this.fetchItems();
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
</style>
