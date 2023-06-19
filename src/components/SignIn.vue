<template>
  <div>
    <div class="form">
      <h2 class="title">Login</h2>
      <el-form ref="login" :model="login" :rules="rules" label-width="120px">
        <el-form-item label="Username" prop="username">
          <el-input v-model="login.username" placeholder="username or email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="login.password" placeholder="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Submit</el-button>
          <el-button type="primary" @click="submit">Sign Up</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: 'Username required.', trigger: 'blur' }],
        password: [{ required: true, message: 'Password required.', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submit() {
      this.$refs['login'].validate((valid) => {
        if (valid) {
          EventService.logIn(this.login)
            .then((response) => {
              this.logIn(response.data)
            })
            .catch((error) => {
              console.log('There was an error: ', error)
            })
        } else {
          return false
        }
      })
    },
    ...mapActions('user', ['logIn', 'getData'])
  }
}
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
