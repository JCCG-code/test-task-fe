<template>
  <!-- User content -->
  <main>
    <!-- Avatar -->
    <img :src="user.avatar_url" alt="user_avatar" />
    <!-- Username title -->
    <h1>{{ $route.params.username }}</h1>
    <!-- User Repositories -->
    <section>
      <div v-for="repo in repos" :key="repo.id">
        <p id="repo-name">{{ repo.name }}</p>
        <p>24</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "UserView",
  data() {
    return {
      user: {},
      repos: [],
    };
  },
  async created() {
    await this.axios
      .get("/users/" + this.$route.params.username)
      .then((res) => {
        if (res.data != null) {
          this.user = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    await this.axios
      .get("/users/" + this.$route.params.username + "/repos")
      .then((res) => {
        if (res.data != null) {
          this.repos = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 80px header height and 120px footer height
  height: calc(100vh - 80px - 120px);

  img {
    margin-top: -50px;

    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    margin-top: 34px;
  }
  section {
    width: 620px;
    height: 116px;
    margin-top: 34px;

    overflow-y: scroll;

    // Indiv repo
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 8px;

      #repo-name {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
      }
      #repo-name:hover {
        text-decoration-line: underline;
        color: #54a3ff;

        cursor: pointer;
      }
    }
  }
}
</style>
