<template>
  <div class="profile">
    <div v-if="user == null">
      <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <SignIn />
        </el-col>
      </el-row>
      <!-- <el-row :gutter="20">
        <el-col :span="8" :offset="8">
          <SignUp />
        </el-col>
      </el-row> -->
    </div>
    <div v-else>
      <el-row :gutter="20">
        <el-col class="v2" :span="3" :offset="4">
          <div class="avatar">
            <el-avatar shape="square" :size="150" :src="squareUrl"></el-avatar>
          </div>
          <div class="username">{{ user.name }}</div>

          <el-row>
            <router-link :to="{ name: 'CreateItem' }">
              <el-button type="text">Create item</el-button>
            </router-link>
          </el-row>
          <el-row>
            <el-button type="text" @click="logOut">LogOut</el-button>
          </el-row>
        </el-col>
        <el-col :span="12">
          <ItemCard
            v-for="item in items"
            :key="item.id"
            :item="item"
            @updateItems="fetchItems"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import ItemCard from "@/components/ItemCard.vue"
import SignIn from "@/components/SignIn";
// import SignUp from "@/components/SignUp";
import { mapState } from "vuex";

export default {
  components: {
    SignIn,
    // SignUp,
    ItemCard,
  },
  data() {
    return {
      items: [],
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("user/logOut");
    },
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
  computed: mapState("user", ["user"]),
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
.v2 {
  border-right: 2px solid #dfdfdf;
  height: 500px;
}
.avatar {
  margin-bottom: 25px;
}
.username {
  margin-bottom: 15px;
}
</style>
