import Post from "./Post.js";

const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      posts: [
        { title: "Title One", content: "Content One" },
        { title: "Title Two", content: "Content Two" },
        { title: "Title Three", content: "Content Three" },
        { title: "Title Four", content: "Content Four" },
      ],
    };
  },
  components: {
    "post-component": Post,
  },
});

app.mount("#app");
