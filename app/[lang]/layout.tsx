import { CartProvider } from "components/cart/cart-context";
import { Navbar } from "components/layout/navbar";
import { WelcomeToast } from "components/welcome-toast";
import { GeistSans } from "geist/font/sans";
import { getCart } from "lib/shopify";
import { baseUrl } from "lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "../globals.css";

const { SITE_NAME } = process.env;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Enable static rendering
  setRequestLocale(lang);

  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart();
  const messages = await getMessages({ locale: lang });

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'} className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <NextIntlClientProvider messages={messages}>
          <CartProvider cartPromise={cart}>
            <Navbar lang={lang} />
            <main>
              {children}
              <Toaster closeButton />
              <WelcomeToast />
            </main>
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
