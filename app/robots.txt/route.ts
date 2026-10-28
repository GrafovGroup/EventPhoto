import {origin} from '@/lib/pages';
export function GET(){return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/sitemap.xml\nSitemap: ${origin}/image-sitemap.xml\n`,{headers:{'Content-Type':'text/plain'}})}
