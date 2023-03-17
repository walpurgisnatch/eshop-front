<template>
  <div>
    <div class="form">
      <h2 class="title">Sign Up</h2>
      <el-form
        ref="newUser"
        :model="newUser"
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Username" prop="name">
          <el-input v-model="newUser.username"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="newUser.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            type="password"
            v-model="newUser.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="confirm">
          <el-input
            type="password"
            v-model="newUser.confirm"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="status" prop="status">
          <el-input v-model="newUser.status"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  data() {
    var confirmPass = (rule, value, callback) => {
      if (value !== this.newUser.password) {
        callback(new Error("Password don't match."));
      } else {
        callback();
      }
    };
    return {
      newUser: {
        username: "",
        email: "",
        password: "",
        confirm: "",
        status: "",
      },
      rules: {
        username: [
          { required: true, message: "Username required.", trigger: "blur" },
          { min: 2, message: "At least 2 symbols required.", trigger: "blur" },
        ],
        email: [
          { required: true, message: "Email required.", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Password required.", trigger: "blur" },
          { min: 4, message: "At least 4 symbols required.", trigger: "blur" },
        ],
        confirm: [{ validator: confirmPass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs["newUser"].validate((valid) => {
        if (valid) {
          EventService.signUp(this.newUser)
            .then((response) => {
              console.log(response.data);
              this.$router.push({ name: 'Profile' })
            })
            .catch((error) => {
              console.log("There was an error: ", error.response);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 50px;
}
.form {
  border: 2px solid #dfdfdf;
  border-radius: 7px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.15);
  padding-right: 40px;
}
</style>
