import { user } from "@/components/layout/data";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
export async function POST(request) {
  let payload = await request.json;
  console.log(payload.email);
  return NextResponse.json({ result: "hello" });
}
