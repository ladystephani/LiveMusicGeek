const { User, Post } = require("../models");

const resolvers = {
  Query: {
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      //find all
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      //find one
      return Post.findOne({ _id });
    },
    users: async () => {
      // get all
      return User.find()
        .select("-__v -password")
        .populate("friends")
        .populate("posts");
    },
    // get one
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("friends")
        .populate("posts");
    },
  },
};

module.exports = resolvers;
