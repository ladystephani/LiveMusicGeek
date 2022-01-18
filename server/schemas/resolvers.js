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
  },
};

module.exports = resolvers;
