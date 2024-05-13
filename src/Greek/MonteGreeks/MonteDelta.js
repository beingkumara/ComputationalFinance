import { monteCarlo } from "../../Call/Monetcarlo";

export function monteDelta(S, k, r, sigma, q, T, N) {
  let s1 = S * (1 + 0.01);
  let s2 = S * (1 - 0.01);
  let arr = [s1, k, r, sigma, q, T, N];
  let d1 = monteCarlo(arr);
  arr[0] = s2;
  let d2 = monteCarlo(arr);
  let delta = (d1 - d2) / (2 * S * 0.01);
  return delta;
}
