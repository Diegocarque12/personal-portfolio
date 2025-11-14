// src/i18n/utils.ts

import type { Locale } from "./translations";
import { getTranslations } from "./translations";

/**
 * Get language from URL pathname
 * @param url - Astro URL object
 * @returns 'es' if URL starts with /es/, otherwise 'en' (default)
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return "en";
}

/**
 * Get translations for current page language
 * @param url - Astro URL object
 * @returns Translations object for the current language
 */
export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);
  return getTranslations(lang);
}

/**
 * Translate a path to another language
 * @param path - Current path
 * @param locale - Target locale
 * @returns Translated path
 */
export function translatePath(path: string, locale: Locale): string {
  // Remove trailing slash
  const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;

  if (locale === "en") {
    // Remove /es/ prefix if present
    return cleanPath.replace(/^\/es/, "") || "/";
  } else {
    // Add /es/ prefix if not present
    if (cleanPath.startsWith("/es")) return cleanPath;
    return `/es${cleanPath}`;
  }
}

/**
 * Get alternate language link
 * @param currentPath - Current page path
 * @param currentLocale - Current language
 * @returns Path in the other language
 */
export function getAlternateLangPath(
  currentPath: string,
  currentLocale: Locale
): string {
  const targetLocale = currentLocale === "en" ? "es" : "en";
  return translatePath(currentPath, targetLocale);
}
