import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'
import { guestOnlyRoutes } from './constants/guestOnlyRoutes'

export const middleware = async(request: NextRequest) => {

  const { pathname } = request.nextUrl
  const session = await auth()

  if(session?.user && guestOnlyRoutes.some((route) =>
    pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}