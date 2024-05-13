import { monteCarlo } from "../../Call/Monetcarlo";

export function monteVega(S, k, r, sigma, q, T, N) {
  let s1 = sigma * (1 + 0.01);
  let s2 = sigma * (1 - 0.01);
  let arr = [S, k, r, s1, q, T, N];
  let d1 = monteCarlo(arr);
  arr[3] = s2;
  let d2 = monteCarlo(arr);
  let vega = (d1 - d2) / (2 * sigma * 0.01);
  return vega.toFixed(2);
}
