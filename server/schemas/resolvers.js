const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("thoughts")
          .populate("friends");
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      // POST route: create user
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      //first, one must be found
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      //validate
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
