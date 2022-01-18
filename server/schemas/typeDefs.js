const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    posts: [Post]
    friends: [User]
  }
  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
  }
`;

module.exports = typeDefs;
