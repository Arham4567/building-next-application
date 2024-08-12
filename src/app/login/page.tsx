"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="border-black flex flex-col bg-blue-500  px-32 items-center pt-16 pb-16">
      <input type="text" className="mx-5 px-5 w-60" />
      Enter Your name
      <input type="text" className="mx-5 px-5 w-60" />
      Enter Your password
      <button
        onClick={() => navigate("login/loggedin")}
        className="bg-green-500 size-12 rounded-2xl px-2 mx-5 hover:bg-green-400
      "
      >
        login
      </button>
    </div>
  );
}

export default Page;
