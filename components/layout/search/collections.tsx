import clsx from "clsx";
import { Suspense } from "react";

import { getCollections } from "lib/shopify";
import { getLocale, getTranslations } from "next-intl/server";
import FilterList from "./filter";

async function CollectionList() {
  const locale = await getLocale();
  const t = await getTranslations("Search");
  const collections = await getCollections(locale);

  // Translate "All" item
  const translatedCollections = collections.map((item) => ({
    ...item,
    title: item.title === "All" ? t("all") : item.title,
  }));

  return <FilterList list={translatedCollections} title={t("collections")} />;
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded-sm";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
