import { NextResponse } from "next/server";

export function GET() {
  console.log("hello world");
  return NextResponse.json({ q: "Hello world! to payment backend" });
}
