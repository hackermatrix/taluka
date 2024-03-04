import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/helper/supabaseClient";

export async function POST(NextRequest) {
  try {
    let { email, password } = await NextRequest.json();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred at login: " + error.message },
      { status: 500 }
    );
  }
}
