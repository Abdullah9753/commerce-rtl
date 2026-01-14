import CartModal from "components/cart/modal";
// import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import LanguageSwitcher from "./language-switcher";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar({ lang }: { lang: string }) {
  const menu = await getMenu("main-menu", lang);

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden me-2">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            prefetch={true}
            className="mr-6 rtl:ml-6 rtl:mr-0 flex w-full items-center justify-start md:w-auto"
          >
            {/* <LogoSquare /> */}
            <div className="ml-2 flex-none text-base font-semibold uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex items-center justify-end gap-3 md:w-1/3">
          <LanguageSwitcher />
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
