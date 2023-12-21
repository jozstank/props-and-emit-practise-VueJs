import Post from "./Post.js";
import CreatePost from "./CreatePost.js";

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
    "createpost-component": CreatePost,
  },
  methods: {
    createPost(data) {
      if (data.title && data.content) {
        this.posts.push(data);
      }
    },
  },
});

app.mount("#app");
