import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 匹配除静态资源、API、favicon 之外的所有路径
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
