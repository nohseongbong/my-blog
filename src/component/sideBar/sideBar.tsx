"use client";

import Link from "next/link";

export default function SideBar() {
  return (
    <div className="min-w-[400px] w-1/6 h-screen shadow-sm bg-blue">
      <ul className="flex flex-col h-full">
        <li className="py-10 flex-center hover:text-xl">
          <Link className="flex flex-1 flex-center" href="/sub">
            메뉴1
          </Link>
        </li>
        <li className="py-10 flex-center hover:text-xl ">
          <Link className="flex flex-1 flex-center" href="/sub">
            메뉴2
          </Link>
        </li>
        <li className="py-10 flex-center hover:text-xl ">
          <Link className="flex flex-1 flex-center" href="/sub">
            메뉴3
          </Link>
        </li>
        <li className="py-10 flex-center hover:text-xl ">
          <Link className="flex flex-1 flex-center" href="/sub">
            메뉴4
          </Link>
        </li>
      </ul>
    </div>
  );
}
