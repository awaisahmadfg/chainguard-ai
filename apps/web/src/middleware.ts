import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_SESSION_COOKIE } from "@/lib/auth-session";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(AUTH_SESSION_COOKIE);

  if (!session?.value) {
    const loginUrl = new URL("/login", request.url);
    // In order to redirect the user from where user tried to access 
      // e.g: user opened /dashboard and redirected to /login?from=/dashboard/
    loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next(); // continue with the request
}

// Middleware config required only for dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
