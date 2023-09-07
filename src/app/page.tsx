"use client";

import { getList } from "@/api/list/list";
import List from "@/component/list";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data } = useQuery(["list"], getList);
  return (
    <div className="py-20 px-10 grid gap-10 min-h-screen ">
      <div className="p-10 rounded-3xl shadow-xl">
        <List list={data} />
      </div>
    </div>
  );
}
// 테스트 page
