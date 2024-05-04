import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { protectedRoutes, publicRoutes } from "./routes";

export function middleware(request) {
  const accessToken = cookies().get("accessToken")?.value;
  const user = jwtDecode(accessToken);

  const { nextUrl } = request;

  const isProtectedRoute = nextUrl.pathname.includes(protectedRoutes);
  const isPublicRoute = nextUrl.pathname.includes(publicRoutes);

  console.log("role: ", user.authorities);

  console.log(user);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
