import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../utils/queries.js";
import PostList from "../components/PostList/index.js";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  // console.log(posts);
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading.....</div>
          ) : (
            <PostList posts={posts} title={"See what is up"}></PostList>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
