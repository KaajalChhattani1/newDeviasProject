import { user } from "@/components/layout/data";
import { NextResponse } from "next/server";

export function GET(response, content) {
  const data = user.filter((item) => {
    content.params.id == item.age;
    console.log(content.params.id, item.age, content.params.id == item.age);
  });
  console.log(data);
  return NextResponse.json(
    data.length == 0
      ? { result: "not found", success: false }
      : { result: { data }, success: true },
    { status: 200 }
  );
}
