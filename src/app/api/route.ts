// Route Handlers : route.js または route.ts という名前をつける必要がある
import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

// ＜GET リクエスト> http://localhost:3000/api で動作確認

// export function GET() {
//   return NextResponse.json({ name: "Joseph Quinn Goldberg" });
// }

// JSONPlaceHolder からデータを取得することも可能
export async function GET() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return NextResponse.json(data);
}

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get('name');
//   console.log("name", name);
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   return NextResponse.json(data);
// }

// cookieStoreの情報を取得できる
// export async function GET() {
//   const headersList = headers();
//   const cookieStore = cookies();

//   console.log('headersList', headersList);
//   console.log('cookieStore', cookieStore);

//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();
//   return NextResponse.json(data);
// }

// ＜POST リクエスト＞
export async function POST(request: Request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
