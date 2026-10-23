/** Where the landing CTAs send new users: the app's sign-up route. */
export const SIGN_UP_URL =
  "https://feedback-system-web-k2oi.onrender.com/sign-up";

/** Where "Entrar" sends returning users: the app's sign-in route. */
export const SIGN_IN_URL =
  "https://feedback-system-web-k2oi.onrender.com/sign-in";

/*
  Links that leave the marketing site (the app's routes) open in a
  new tab so the pitch stays open behind them; in-page anchors keep
  default same-tab navigation.
*/
export const isExternal = (href: string) => href.startsWith("http");

/** Anchor attributes for those external links. */
export const NEW_TAB_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

