import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  if (url.hostname === 'www.eventphoto.ca') {
    url.hostname = 'eventphoto.ca';
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 308);
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-language', url.pathname.startsWith('/fr/') || url.pathname === '/fr' ? 'fr' : 'en');
  return NextResponse.next({request:{headers:requestHeaders}});
}

export const config = { matcher: '/:path*' };
