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
  margin: 0px 244px 0px 244px;
}
* {
  margin: 0px;
}
</style>
