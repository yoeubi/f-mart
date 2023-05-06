// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  const hasToken = request.cookies.has("access_token");
  if (hasToken) return response;
  if (request.url === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
