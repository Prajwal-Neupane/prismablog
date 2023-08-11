"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [posts, setePosts] = useState([]);
  const handleDelete = async (id: number) => {
    await axios.delete(`/api/blog/${id}`);
    alert("Successfully deleted");
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      await axios.get("/api/blog").then((res) => {
        setePosts(res.data.posts);
      });
    };
    fetchBlogs();
  }, [posts]);

  return (
    <div>
      {/* {posts?.map((post: any) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      ))} */}
      {posts ? (
        posts?.map((post: any) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <Link href={`/editblog/${post.id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Page;
