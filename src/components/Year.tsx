"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const currentYear = () => new Date().getFullYear();

/**
 * Current year. The site is a static export, so the server-rendered HTML holds the year the site
 * was built in (`initial`); after hydration the browser shows the real current year.
 */
export function Year({ initial }: { initial: number }) {
  const year = useSyncExternalStore(subscribe, currentYear, () => initial);
  return <>{year}</>;
}
