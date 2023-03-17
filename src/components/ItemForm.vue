<template>
  <div>
    <el-button type="primary" @click="submit">Create</el-button>
    <h2 class="title">{{ header }}</h2>
    <textarea v-model="item.body" class="item" />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    return {
      item: {
        title: "",
        body: "",
        attachments: null,
        user: 1,
      },
      rules: {
        body: [{ required: true, message: "Body required.", trigger: "blur" }],
      },
    };
  },
  methods: {
    setTitle() {
      this.item.title = this.header;
    },
    submit() {
      this.setTitle();
      this.item.body = this.item.body.slice(this.header.length + 1)
      EventService.createItem(this.item)
        .then((response) => {
          if (response.status == 200) {
            this.$router.push({
              name: "Item",
              params: { id: response.data.id },
            });
          }
        })
        .catch((error) => {
          console.log("There was an error: ", error);
        });
    },
  },
  computed: {
    header: function() {
      return this.item.body.split("\n")[0];
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.item {
  margin: 0 25px 25px;
  height: 400px;
  width: 100%;
  border: none;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.05);
}
.item:focus {
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
