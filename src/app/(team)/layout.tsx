import React from "react";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-blue-500 flex items-center justify-between h-12 ">
        <header>This is team Header</header>
      </div>
      <div className="mx-5 my-5 font-bold">{children}</div>
      <footer className="bg-blue-500 flex items-center justify-between h-12 ">
        This is team footer
      </footer>
    </div>
  );
}

export default layout;
