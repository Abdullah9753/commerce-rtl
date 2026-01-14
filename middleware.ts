import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
});

export const config = {
    matcher: [
        // Match all pathnames except for
        // - api routes
        // - _next (Next.js internals)
        // - _vercel (Vercel internals)
        // - static files (images, fonts, etc.)
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
};
