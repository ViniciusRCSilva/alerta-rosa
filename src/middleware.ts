import { NextResponse, NextRequest } from 'next/server'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'

export function middleware(request: NextRequest) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  })
}

export const config = {
  matcher: ['/', '/sinais', '/legislacao', '/contatos', '/form'],
}
