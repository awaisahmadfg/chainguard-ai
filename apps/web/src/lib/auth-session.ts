export const AUTH_SESSION_COOKIE = "cg_session";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export function establishClientSession() {
  document.cookie = `${AUTH_SESSION_COOKIE}=1; path=/; max-age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`;
}
