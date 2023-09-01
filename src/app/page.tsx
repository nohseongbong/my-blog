"use client";

import { getList } from "@/api/list/list";
import List from "@/component/list";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

function Main() {
  const { data } = useQuery(["list"], () => getList());
  console.log(data, ":data");
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <List list={data} />
      </div>
    </div>
  );
}
