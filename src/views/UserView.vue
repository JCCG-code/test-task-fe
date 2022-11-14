<template>
  <!-- User content -->
  <main>
    <h1>This is the user {{ $route.params.username }}</h1>
  </main>
</template>

<script>
export default {
  name: "UserView",
};
</script>
