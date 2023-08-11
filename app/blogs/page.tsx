"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [posts, setePosts] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      await axios.get("/api/blog").then((res) => {
        setePosts(res.data.posts);
      });
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {posts?.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
