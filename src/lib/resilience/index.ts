/**
 * Vendored subset of cubiczan-resilience (typescript/src).
 *
 * Copied here because the repo has no npm registry access. Source of truth:
 * ../../../../cubiczan-resilience/typescript/src — keep in sync when upgrading.
 *
 * Provides: safeFetch (per-attempt timeout + exponential-backoff retry on
 * 429/5xx + network errors, optional SSRF allowlist) and requireAuth /
 * requireAuthResponse (fail-closed bearer-token gate).
 */
export { safeFetch } from "./safeFetch.ts";
export type { SafeFetchOptions, AllowlistHook } from "./safeFetch.ts";
export { requireAuth, requireAuthResponse } from "./auth.ts";
export type { AuthResult, RequireAuthOptions } from "./auth.ts";
export { ResilienceError, isResilienceError } from "./errors.ts";
export type { ResilienceErrorKind } from "./errors.ts";
export { retry } from "./retry.ts";
export { withTimeout } from "./timeout.ts";
