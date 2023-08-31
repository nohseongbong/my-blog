export async function GET(request: Request) {
  const data = ["Hello", "Bye", "Who?"];
  const res = new Response(JSON.stringify(data), {
    status: 200,
  });
  console.log(res, ": resasdasdasdas");
  return res;
}
