import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/app(.*)", "/api(.*)"]);

const isOnboardingRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
  if (!auth().userId && isProtectedRoute(req)) {
    return auth().redirectToSignIn();
  }
  if (auth().userId && isOnboardingRoute(req)) {
    const onboardingUrl = new URL("/app", req.url);
    return NextResponse.redirect(onboardingUrl);
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
