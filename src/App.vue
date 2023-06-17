<template>
  <div class="main">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
  <Footer class="footer" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "@/components/NotificationContainer.vue";
import Footer from "@/components/Footer.vue"
// import axios from "axios";

export default {
  components: {
    NavBar,
    NotificationContainer,
    Footer
  },
  created() {
    this.$store.dispatch('cart/getFromStorage')
    // const userString = localStorage.getItem("user");
    // if (userString) {
    //   const userData = JSON.parse(userString);
    //   this.$store.dispatch('user/logIn', userData);
    // }
    // axios.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     if (error.response.status === 401) {
    //       this.$store.dispatch("user/logOut");
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  },
};
</script>

<style>
body {
  background-color: #fff;
}

#app {
  margin: 0 5% 0;
}

.main {
  min-height: 900px;
}

.footer {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 25px 0 0 0;
}
</style>
