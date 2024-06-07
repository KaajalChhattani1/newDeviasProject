import { user } from "@/components/layout/data";
import { NextResponse } from "next/server";

export function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
