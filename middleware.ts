import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  publicRoute: ['/api/webhooks/clerk'],
};
