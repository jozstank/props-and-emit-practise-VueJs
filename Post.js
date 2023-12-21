const Post = {
  props: {
    // Method 1
    // title: String,
    // content: String,

    // Method 2
    title: {
      type: String,
      //   required: true,
      default: "This is default Title",
    },
    content: String,
  },

  template: `
    <div>
        <h1>{{title}}</h1>
        <p>{{content}}</p>
    </div>
    `,
};

export default Post;
