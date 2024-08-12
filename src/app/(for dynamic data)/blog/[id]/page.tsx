import React from "react";

import { blogs } from "@/content";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

const findBlogDetail = (id: number) => {
  console.log("🚀 ~ findBlogDetail ~ id:", id);
  const blog = blogs.find((item) => {
    return item.id === id;
  });

  return blog;
};

function BlogDetail({ params }: BlogDetailPageProps) {
  console.log( params.id);
  const blog = findBlogDetail(Number(params.id));
  console.log( blog);

  return (
    <div className="my-8 mx-72 bg-blue-500 grid py-2 place-content-center">
      Blog Detail
      <div className="py-5 ">
        <h1 className="font-bold">{blog?.title}</h1>
        <p>{blog?.content}</p>
        <p className="font-semibold">Author: {blog?.author}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
