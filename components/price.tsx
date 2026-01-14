"use client";

import { useLocale } from "next-intl";

const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const locale = useLocale() || "en-US";

  return (
    <p suppressHydrationWarning={true} className={className}>
      {new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}
    </p>
  );
};

export default Price;
