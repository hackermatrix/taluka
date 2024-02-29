import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = "api success";

    return NextResponse.json({ response: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred at server: " + error.message },
      { status: 500 }
    );
  }
}
