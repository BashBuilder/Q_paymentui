import { NextResponse, NextRequest } from "next/server";

export function GET() {
  console.log("hello world");
  return NextResponse.json({ q: "Hello world! to payment backend" });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const headers = await req.headers;
  console.log("request headers", headers);
  console.log("request body", body);
  return NextResponse.json({ body });
}
