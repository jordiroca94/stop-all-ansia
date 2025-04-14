import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json(
    { error: "Invalid username or password." },
    { status: 401 }
  );
}
