import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

export default function Postsview() {
  const user = useSelector((state) => state.posts);

  const { isLoading, posts, error } = user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <h2> loading....</h2>}
      {error && <h2>{error}</h2>}
      {posts &&
        posts.map((post) => {
          return (
            <article>
              <h3>{post.title}</h3>
            </article>
          );
        })}
    </div>
  );
}
