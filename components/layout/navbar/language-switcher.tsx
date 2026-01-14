'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../../navigation';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <select
            value={locale}
            onChange={handleChange}
            className="text-black bg-white border border-neutral-200 dark:text-white dark:bg-black dark:border-neutral-700 rounded-md px-4 py-2 text-sm cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
            aria-label="Select language"
        >
            <option value="en" className="bg-white text-black dark:bg-black dark:text-white">EN</option>
            <option value="ar" className="bg-white text-black dark:bg-black dark:text-white">عربي</option>
        </select>
    );
}
