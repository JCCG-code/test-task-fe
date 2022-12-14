<template>
  <!-- Home content -->
  <main>
    <!-- Home header -->
    <header>
      <h1>Top Users</h1>
    </header>
    <!-- Home section -->
    <section>
      <div v-for="user in filteredUsersByUsername" :key="user.id">
        <!-- Avatar -->
        <div class="duck-icon-wrap" v-if="user.avatar_url == null">
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="70" cy="70" r="70" fill="#54A3FF" />
          </svg>
          <img
            class="duck-image"
            src="../assets/rubber-duck.png"
            alt="Duck image"
          />
        </div>
        <img v-else :src="user.avatar_url" alt="user_avatar" />
        <!-- Username -->
        <router-link
          class="username-link"
          :to="{ name: 'User', params: { username: user.login } }"
        >
          <p id="username">{{ user.login }}</p>
        </router-link>
        <!-- Icon and link wrap -->
        <div class="icon-link-wrap">
          <!-- Icon -->
          <div id="iconmonstr-link-thin">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.90066 7.94867C9.78132 7.52134 9.55332 7.118 9.21732 6.78267C8.17599 5.74133 6.48732 5.74067 5.44599 6.78267L2.11399 10.1147C1.07266 11.1567 1.07199 12.8447 2.11399 13.886C3.15532 14.928 4.84466 14.9267 5.88466 13.886L8.44599 11.3253L8.66799 11.3313C8.93732 11.3313 9.20266 11.3047 9.46066 11.2533L6.35599 14.3573C5.70599 15.008 4.85266 15.3333 3.99932 15.3333C3.14599 15.3333 2.29266 15.008 1.64266 14.3573C0.341323 13.0567 0.341323 10.944 1.64266 9.64334L4.97466 6.31133C5.62466 5.66067 6.47866 5.33533 7.33199 5.33533C8.18466 5.33533 9.03866 5.66067 9.68866 6.31133C10.0173 6.64 10.2627 7.02 10.4253 7.426L9.90066 7.94867ZM6.09866 8.04667C6.21732 8.47533 6.44599 8.88 6.78266 9.21733C7.82399 10.2593 9.51332 10.258 10.5533 9.21733L13.886 5.88533C14.928 4.844 14.928 3.15533 13.886 2.114C12.8447 1.07267 11.156 1.072 10.1147 2.114L7.55399 4.67467L7.33199 4.66867C7.06266 4.66867 6.79732 4.69533 6.53932 4.74667L9.64332 1.64267C10.2933 0.992001 11.1473 0.666668 12.0007 0.666668C12.8533 0.666668 13.7073 0.992001 14.3573 1.64267C15.658 2.94333 15.658 5.05533 14.3573 6.35667L11.0247 9.68867C10.3747 10.3393 9.52132 10.6647 8.66799 10.6647C7.81466 10.6647 6.96132 10.3393 6.31132 9.68867C5.98199 9.35867 5.73599 8.97733 5.57332 8.57L6.09866 8.04667Z"
                fill="#54A3FF"
              />
            </svg>
          </div>
          <!-- Link to GitHub user page -->
          <a :href="user.html_url" target="_blank">github</a>
        </div>
      </div>
    </section>
    <!-- Users not found message -->
    <div
      class="user-not-found-message"
      v-if="filteredUsersByUsername.length === 0"
    >
      <p>Users not found</p>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  async created() {
    if (Object.keys(this.$store.state.users).length == 0) {
      await this.axios
        .get("/users?per_page=32")
        .then((res) => {
          if (res.data != null) {
            this.$store.dispatch("loadUsers", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapGetters(["getUsers"]),
    filteredUsersByUsername() {
      return this.getUsers.filter((user) =>
        user.login.includes(this.$store.state.searchInput)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  // 80px header height and 120px footer height
  height: calc(100vh - 80px - 120px);

  header {
    margin-bottom: 65px;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;

      color: #000000;

      cursor: default;
    }
  }

  section {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 200px 200px;
    gap: 37px 50px;

    height: 440px;
    overflow-y: scroll;

    // User wrap
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .duck-icon-wrap {
        margin-bottom: 12px;
        .duck-image {
          margin-top: -120px;

          width: 100px;
          height: 100px;
        }
      }

      img {
        width: 140px;
        height: 140px;
        margin-bottom: 12px;
        border-radius: 50%;
      }

      .username-link {
        text-decoration: none;

        #username {
          text-align: center;
          text-decoration: none;

          margin-bottom: 2px;

          font-size: 20px;
          font-weight: 700;
          line-height: 23px;

          color: #000000;
        }

        #username:hover {
          text-shadow: 0px 0px 5px #bababa;
        }
      }

      .icon-link-wrap {
        display: flex;
        flex-direction: row;
        align-items: center;

        #iconmonstr-link-thin {
          width: 16px;
          height: 16px;

          margin-right: 4.67px;
        }

        a {
          text-decoration: none;
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;

          color: #54a3ff;
        }

        a:hover {
          text-decoration-line: underline;
        }
      }
    }
  }

  // User not found message wrap
  .user-not-found-message {
    position: absolute;
    top: 340px;

    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000000;

    cursor: default;
  }
}
</style>
