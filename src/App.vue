<template>
  <HeaderComponentVue />
  <router-view />
  <FooterComponentVue />
</template>

<script>
import HeaderComponentVue from "./components/HeaderComponent.vue";
import FooterComponentVue from "./components/FooterComponent.vue";

export default {
  components: {
    HeaderComponentVue,
    FooterComponentVue,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // App max screen size
  width: 65%;
  height: 100vh;
}

* {
  margin: 0px;
}

body {
  display: flex;
  justify-content: center;
  background: #f6f9ff;
}

main {
  background: #ffffff;
  box-shadow: 0px 36px 12px rgba(204, 204, 204, 0.25);
}
</style>
