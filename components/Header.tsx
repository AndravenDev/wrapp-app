"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const navButtonBaseStyle = "pt-1 pr-2 pb-1 pl-2 rounded-lg cursor-pointer";
  const [activePage, setActivePage] = useState<"home" | "dashboard">("home");



  return (
    <div className="block bg-white justify-between px-[20%] p-3 items-center md:flex">
      <p className="font-bold text-black">WrappApp</p>
      <div className="bg-gray-200 rounded-lg pt-2 pr-4 pb-2 pl-4 w-fit">
        <Link
          href='/'
          className={`${navButtonBaseStyle} ${activePage === "home" ? "bg-white" : ""}`}
          onClick={() => {
            setActivePage("home");
          }}
        >
          Home
        </Link>
        <Link
          href='/dashboard'
          className={`${navButtonBaseStyle} ${activePage === "dashboard" ? "bg-white" : ""}`}
          onClick={() => {
            setActivePage("dashboard");
          }}
        >
          Dashboard
        </Link>
      </div>
      <button className="font-bold pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white rounded-lg cursor-pointer">
        Create
      </button>
    </div>
  );
}
