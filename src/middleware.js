import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";

export async function middleware(req, res) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);

    const requestHeader = new Headers(req.headers);
    requestHeader.set("username", payload.username["username"]);
    requestHeader.set("id", payload.username["id"]);

    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (e) {
    const protectedRoutes = ["/dashboard"];

    if (protectedRoutes.includes(req.nextUrl.pathname)) {
      const absoluteURL = new URL("/", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
    const requestHeader = new Headers(req.headers);
    requestHeader.set("username", "0");
    requestHeader.set("id", "0");

    return NextResponse.next({ request: { headers: requestHeader } });
  }
}
