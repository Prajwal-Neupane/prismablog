"use client";

import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface DataProps {
  title: string;
  description: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<DataProps>({
    title: "",
    description: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("/api/blog", data).then(() => {
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
        />{" "}
        <br /> <br />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description"
          cols={30}
          rows={10}
        />{" "}
        <br /> <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Page;
