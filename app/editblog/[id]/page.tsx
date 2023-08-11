"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      await axios.get(`/api/blog/${params.id}`).then((res) => {
        setData(res.data.post);
      });
    };
    fetchBlogs();
  }, [params.id]);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.put(`/api/blog/${params.id}`, data).then(() => {
      router.push("/blogs");
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
        />{" "}
        <br /> <br />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description"
          value={data.description}
          cols={30}
          rows={10}
        />{" "}
        <br /> <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Page;
