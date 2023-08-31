import List from "@/component/list";

const fetchApi = async () => {
  const response = await fetch("http://localhost:3000/api/hello");
  const result = response.json();
  console.log(result, ": response.json()");
  return result;
};

export default async function Home() {
  const list: string[] = await fetchApi();

  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <List list={list} />
      </div>
    </div>
  );
}
