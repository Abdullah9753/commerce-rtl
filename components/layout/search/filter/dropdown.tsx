"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import type { ListItem } from ".";
import { FilterItem } from "./item";

export default function FilterItemDropdown({ list }: { list: ListItem[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("Search.sort");
  const [active, setActive] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getTranslatedTitle = (slug: string | null | undefined) => {
    switch (slug) {
      case null:
      case undefined:
        return t("relevance");
      case "trending-desc":
        return t("trending");
      case "latest-desc":
        return t("latest");
      case "price-asc":
        return t("priceLowHigh");
      case "price-desc":
        return t("priceHighLow");
      default:
        return slug;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: ListItem) => {
      if (
        ("path" in listItem && pathname === listItem.path) ||
        ("slug" in listItem && searchParams.get("sort") === listItem.slug)
      ) {
        const slug = "slug" in listItem ? listItem.slug : undefined;
        setActive(getTranslatedTitle(slug));
      }
    });
  }, [pathname, list, searchParams, t]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded-sm border border-black/30 px-4 py-2 text-sm dark:border-white/30"
      >
        <div>{active}</div>
        <ChevronDownIcon className="h-4" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {list.map((item: ListItem, i) => (
            <FilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
