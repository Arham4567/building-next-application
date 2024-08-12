import React from "react";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-blue-500 ">
        <Link href="/more_settings" className="px-5 pt-5 underline text-black">
          More Settings
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
