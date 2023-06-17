<template>
  <el-card class="box-card" @click="itemPage">
    <el-row>
      <el-col :span="4">
        <el-image
          class="image"
          :src="item.thumbnail"
          fit="cover"
        />
      </el-col>
      <el-col class="centered" :span="13">
        <div class="name">{{ item.name }}</div>
      </el-col>
      <el-col :span="5">
        <div class="cost">{{ item.cost }}</div>
        <el-input-number
          v-model="count"
          :min="1"
          :max="100"
          @click="prevent"
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
  data() {
    return {
      count: this.item.count
    }
  },
  methods: {
    deleteItem(e) {
      e.stopPropagation();
      this.removeItem(this.item.id);
    },
    itemPage() {
      this.$router.push({ name: "Item", params: { id: this.item.id } });
    },
    prevent(e) {
      e.stopPropagation();
    },
    handleChange() {
      this.changeCount({ id: this.item.id, count: this.count })
    },
    ...mapActions("cart", ["removeItem", "changeCount"]),
  }
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
  width: 125px;
}
</style>
