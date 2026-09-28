// -----------------------------------------------------------------------------
// Theme registry + runtime switching for the docs playground.
//
// Each @ambrosy-ui theme package emits a self-contained CSS unit (its `:root`
// token vars *and* the global component rules). We import each as an inline
// string and inject the *active* theme into a single managed <style> element,
// appended after the statically-imported baseline so it always wins by source
// order. Swapping the whole stylesheet (rather than only re-setting CSS vars)
// keeps the picker correct if the themes' component rules diverge.
// -----------------------------------------------------------------------------

import { ref } from "vue";
import defaultCss from "@ambrosy-ui/theme-default/css?inline";
import getisekaidCss from "@ambrosy-ui/theme-getisekaid/css?inline";

export const THEMES = [
  { id: "default", label: "Default", css: defaultCss },
  { id: "getisekaid", label: "Get Isekai'd", css: getisekaidCss },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const DEFAULT_THEME: ThemeId = "default";
export const STORAGE_KEY = "ambrosy-ui:theme";

const STYLE_ID = "ambrosy-ui-theme";

/** Shared reactive selection, read by the picker UI. */
export const activeTheme = ref<ThemeId>(DEFAULT_THEME);

/** Inject the given theme's CSS into the managed <style> and persist the choice. */
export function applyTheme(id: ThemeId): void {
  activeTheme.value = id;
  if (typeof document === "undefined") return;

  let el = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement("style");
    el.id = STYLE_ID;
    document.head.appendChild(el); // appended last → overrides the baseline import
  }
  el.textContent = THEMES.find((t) => t.id === id)?.css ?? "";

  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ignore unavailable / blocked storage
  }
  document.documentElement.dataset.ambrosyTheme = id;
}

/** Apply the persisted theme (or the default) on app start. Safe during SSR. */
export function initTheme(): void {
  if (typeof localStorage === "undefined") return;
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
  applyTheme(
    saved && THEMES.some((t) => t.id === saved) ? saved : DEFAULT_THEME,
  );
}
