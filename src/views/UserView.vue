<template>
  <!-- User content -->
  <main>
    <!-- Back button -->
    <div class="back-button">
      <router-link to="/">
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.018 0C23.295 0 30.0135 6.72 30.0135 14.997C30.0135 23.2725 23.295 29.9925 15.018 29.9925C6.741 29.9925 0.0209961 23.2725 0.0209961 14.997C0.0209961 6.72 6.741 0 15.018 0ZM12.7335 9.315C12.7335 9.315 10.4805 11.5725 7.851 14.2035C7.6305 14.424 7.521 14.712 7.521 15C7.521 15.288 7.6305 15.5745 7.851 15.795C10.4805 18.426 12.732 20.682 12.732 20.682C12.9495 20.8995 13.2345 21.0075 13.521 21.0075C13.809 21.006 14.097 20.8965 14.3175 20.676C14.7555 20.2365 14.7585 19.527 14.322 19.0905L11.3565 16.125H21.396C22.017 16.125 22.521 15.621 22.521 15C22.521 14.379 22.017 13.875 21.396 13.875H11.3565L14.3235 10.9065C14.7585 10.473 14.754 9.7635 14.3145 9.3255C14.094 9.105 13.806 8.994 13.5195 8.9925C13.2345 8.9925 12.9495 9.099 12.7335 9.315Z"
            fill="black"
          />
        </svg>
      </router-link>
    </div>
    <!-- Avatar -->
    <div class="duck-icon-wrap" v-if="user.avatar_url == null">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="150" r="150" fill="#54A3FF" />
      </svg>
      <img
        class="duck-image"
        src="../assets/rubber-duck.png"
        alt="Duck image"
      />
    </div>
    <img v-else :src="user.avatar_url" alt="user_avatar" />
    <!-- Username title -->
    <h1>{{ $route.params.username }}</h1>
    <!-- User Repositories -->
    <section>
      <div v-for="repo in repos" :key="repo.id">
        <!-- Repository name wrap -->
        <div class="repo-name-wrap">
          <a :href="repo.html_url" target="_blank">
            <p>{{ repo.name }}</p>
          </a>
        </div>
        <!-- Icon number watcher wrap -->
        <div class="icon-number-watcher-wrap">
          <svg
            width="23"
            height="15"
            viewBox="0 0 23 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8773 6.79777C16.6698 6.79777 15.6934 7.83003 15.6934 9.09553C15.6934 9.39826 15.9292 9.6464 16.217 9.6464C16.5047 9.6464 16.7405 9.39826 16.7405 9.09553C16.7405 8.43548 17.2547 7.89454 17.8821 7.89454C18.1698 7.89454 18.4056 7.6464 18.4056 7.34367C18.4009 7.04094 18.1651 6.79777 17.8773 6.79777Z"
              fill="black"
            />
            <path
              d="M21.4387 5.21464C21.3113 5.08561 21.1745 4.96154 21.033 4.84243L19.099 3.11538C18.3538 2.55955 17.467 2.2072 16.5047 2.13772L16.6085 2.2469L15.4339 1.0062H15.4245C15.099 0.693548 14.6604 0.5 14.1839 0.5C13.3632 0.5 12.6698 1.06079 12.4339 1.83995C12.1981 1.68114 11.9245 1.58685 11.6273 1.567C11.5802 1.56203 11.5283 1.56203 11.4811 1.56203C11.1462 1.56203 10.8349 1.66625 10.5707 1.83995C10.3302 1.06576 9.63678 0.504963 8.82074 0.504963C8.34433 0.504963 7.91037 0.693549 7.58018 1.01117H7.57075L6.39622 2.25186L6.49999 2.14268C5.53773 2.21216 4.64622 2.56948 3.90566 3.12035L1.9717 4.84739C1.83019 4.96154 1.69339 5.08561 1.56604 5.2196C0.599056 6.20223 0 7.57692 0 9.1005C0 12.0782 2.30188 14.5 5.13207 14.5C7.74527 14.5 9.91037 12.4305 10.2217 9.76551C10.599 9.9938 11.0377 10.1228 11.5 10.1228C11.967 10.1228 12.4009 9.9938 12.7783 9.76551C13.0943 12.4256 15.2547 14.495 17.8679 14.495C20.6981 14.495 23 12.0732 23 9.09553C23.0047 7.57196 22.4056 6.19727 21.4387 5.21464ZM5.13207 12.7829C3.19811 12.7829 1.63207 11.1352 1.63207 9.1005C1.63207 7.06576 3.19811 5.41811 5.13207 5.41811C7.06603 5.41811 8.63206 7.06576 8.63206 9.1005C8.63678 11.1303 7.06603 12.7829 5.13207 12.7829ZM11.5047 8.59429C10.8773 8.59429 10.3679 8.05831 10.3679 7.39826C10.3679 6.73821 10.8773 6.20223 11.5047 6.20223C12.1321 6.20223 12.6415 6.73821 12.6415 7.39826C12.6415 8.05831 12.1321 8.59429 11.5047 8.59429ZM17.8773 12.7829C15.9434 12.7829 14.3773 11.1352 14.3773 9.1005C14.3773 7.06576 15.9434 5.41811 17.8773 5.41811C19.8113 5.41811 21.3773 7.06576 21.3773 9.1005C21.3773 11.1303 19.8113 12.7829 17.8773 12.7829Z"
              fill="black"
            />
            <path
              d="M5.13207 6.79777C3.92452 6.79777 2.94811 7.83003 2.94811 9.09553C2.94811 9.39826 3.18396 9.6464 3.47169 9.6464C3.75943 9.6464 3.99528 9.39826 3.99528 9.09553C3.99528 8.43548 4.50943 7.89454 5.13679 7.89454C5.42452 7.89454 5.66037 7.6464 5.66037 7.34367C5.65565 7.04094 5.41981 6.79777 5.13207 6.79777Z"
              fill="black"
            />
          </svg>
          <p>{{ repo.watchers_count }}</p>
        </div>
        <!-- Icon number stars wrap -->
        <div class="icon-number-stars-wrap">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9488 8.82694C22.8885 8.64118 22.7775 8.47601 22.6284 8.35011C22.4792 8.22422 22.2978 8.14262 22.1047 8.11454L15.425 7.14304L12.4377 1.08339C12.3513 0.908267 12.2177 0.760825 12.052 0.65773C11.8863 0.554636 11.6951 0.5 11.5 0.5C11.3049 0.5 11.1137 0.554636 10.948 0.65773C10.7823 0.760825 10.6487 0.908267 10.5623 1.08339L7.57522 7.14297L0.895306 8.11447C0.702216 8.14255 0.520827 8.22415 0.371651 8.35005C0.222476 8.47595 0.111465 8.64112 0.051173 8.82688C-0.009119 9.01264 -0.0162868 9.21158 0.0304802 9.40121C0.0772472 9.59084 0.176083 9.76358 0.315811 9.89991L5.1494 14.6159L4.00791 21.2763C3.97492 21.4688 3.9964 21.6667 4.06991 21.8476C4.14342 22.0285 4.26603 22.1853 4.42387 22.3001C4.58172 22.4149 4.7685 22.4832 4.96311 22.4973C5.15771 22.5114 5.35237 22.4706 5.52507 22.3798L11.4999 19.2355L17.4747 22.3798C17.6258 22.4587 17.7937 22.4999 17.9642 22.5C18.541 22.4992 19.0084 22.0309 19.0084 21.4533C19.0084 21.3729 18.9993 21.2945 18.9821 21.2194L17.8505 14.616L22.6841 9.89991C22.8239 9.76361 22.9227 9.59087 22.9695 9.40125C23.0163 9.21163 23.0091 9.0127 22.9488 8.82694Z"
              fill="black"
            />
          </svg>
          <p>{{ repo.stargazers_count }}</p>
        </div>
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
// General CSS code for SVG icons
svg {
  margin-right: 10px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 80px header height and 120px footer height
  height: calc(100vh - 80px - 120px);

  .back-button {
    position: absolute;

    margin-top: -572px;
    margin-right: 1080px;
  }

  .duck-icon-wrap {
    margin-top: -50px;

    .duck-image {
      position: absolute;
      margin-top: 30px;
      margin-left: -280px;

      width: 240px;
      height: 240px;
    }
  }

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
    width: 820px;
    height: 140px;
    margin-top: 34px;

    overflow-y: scroll;

    // Indiv repo
    div {
      display: grid;
      grid-template-columns: 600px 100px 70px;
      align-items: center;

      margin-bottom: 8px;

      .repo-name-wrap {
        a {
          text-decoration: none;
          width: fit-content;

          font-weight: 400;
          font-size: 20px;
          line-height: 23px;

          color: #000000;
        }
        a:hover {
          text-decoration-line: underline;
          color: #54a3ff;

          cursor: pointer;
        }
      }
      .icon-number-watcher-wrap {
        display: flex;
      }
      .icon-number-stars-wrap {
        display: flex;
      }
    }
  }
}
</style>
