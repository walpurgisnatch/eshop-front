<template>
  <el-card class="box-card" @click="itemPage">
    <el-row>
      <el-col :span="4">
        <el-image
          class="image"
          src="https://twinfinite.net/wp-content/uploads/2022/11/Chainsaw-Man-Anime-Makima-Staring-down-at-Denji-Screenshot.jpg?fit=1200%2C675"
          fit="cover"
        />
      </el-col>
      <el-col class="centered" :span="14">
        <div class="name">{{ item.name }}</div>
      </el-col>
      <el-col :span="4">
        <div class="cost">{{ item.cost }}</div>
        <el-input-number
          v-model="count"
          :min="1"
          :max="10"
          @change="handleChange"
          class="count"
        />
      </el-col>
      <el-col class="centered" :span="2">
        <el-button class="button" text @click="deleteItem">
          <el-icon size="25">
            <Delete />
          </el-icon>
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: Object,
  },
  methods: {
    deleteItem(e) {
      e.stopPropagation();
      this.removeItem(this.item.id);
    },
    itemPage() {
      this.$router.push({ name: "Item", params: { id: this.item.id } });
    },
    ...mapActions("cart", ["removeItem"]),
  },
  computed: {
    count() {
      return this.item.count;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  width: 640px;
  height: 120px;

  &:hover {
    cursor: pointer;
  }
}

.image {
  width: 75px;
  height: 75px;
}

.centered {
  display: flex;
  align-items: center;
}

.name {
  text-align: left;
  margin-left: 25px;
}

.cost {
  font-size: 24px;
  color: gray;
}

.count {
  width: 100px;
}
</style>
