import { NextResponse } from "next/server";

// http://localhost:3000/api/100 で動作確認
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return NextResponse.json(id);
}
