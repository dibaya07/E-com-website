import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';


const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(async(auth, req)=>{
  const { sessionClaims} = await auth();
  const role =  (sessionClaims?.metadata as { role?: string } | undefined )?.role
  
  if (isAdminRoute(req) && role !== 'admin') {
    const url = new URL('/notFound', req.url)
    return NextResponse.redirect(url)
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',
  ],
}