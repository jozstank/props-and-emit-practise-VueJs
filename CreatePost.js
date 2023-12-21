const CreatePost = {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  emits: ["abc"],

  template: `
    <div>
        <input type="text" v-model="title" placeholder="Enter Your Post Title">
        <input type="text" v-model="content" placeholder="Enter Your Post Content">
        <button @click="emitSubmit">Post Submit</button>
    </div>
    `,
  methods: {
    emitSubmit() {
      this.$emit("abc", {
        title: this.title,
        content: this.content,
      });

      (this.title = ""), (this.content = "");
    },
  },
};

export default CreatePost;
