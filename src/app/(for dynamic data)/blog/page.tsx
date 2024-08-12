import Link from "next/link";
import React from "react";
import { blogs } from "@/content";

function BlogPage() {
  return (
    <div className="flex gap-5 py-10">
      {blogs.map((item, index) => (
        <Link key={item.id} href={`/blog/${item.id}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;
