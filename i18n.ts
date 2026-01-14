import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // Fallback to default if locale is undefined or invalid
    if (!locale || !locales.includes(locale as Locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default,
    };
});
