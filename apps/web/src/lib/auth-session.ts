export const AUTH_SESSION_COOKIE = "cg_session";
export const DEMO_TOUR_STORAGE_KEY = "cg_demo_tour_dismissed";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export function establishClientSession() {
  document.cookie = `${AUTH_SESSION_COOKIE}=1; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
}

export function clearClientSession() {
  document.cookie = `${AUTH_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
  try {
    window.localStorage.removeItem(DEMO_TOUR_STORAGE_KEY);
  } catch {
    // ignore storage errors in private browsing
  }
}
