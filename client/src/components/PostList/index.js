import React from "react";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map((post) => (
          <div className="card mb-3" key={post._id}>
            <p className="card-header">
              {post.username} posted on {post.createdAt}
            </p>
            <div className="card-body">
              <p>{post.postText}</p>
              <p className="mb-0">
                {post.replyCount} reply (replies) || Click here to{" "}
                {post.replyCount ? "read" : "write"} comments
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
