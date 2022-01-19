import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div className="card mb-3" key={post._id}>
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{" "}
              posted on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  {post.replyCount} reply (replies) || Click here to{" "}
                  {post.replyCount ? "read" : "write"} comments
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
