import { monteDelta } from "./MonteDelta";

export function monteGamma(S, k, r, sigma, q, T, N) {
  let s1 = S * (1 + 0.01);
  let s2 = S * (1 - 0.01);
  let d1 = monteDelta(s1, k, r, sigma, q, T, N);
  let d2 = monteDelta(S, k, r, sigma, q, T, N);
  let ans = (d1 - d2) / (2 * S * 0.01);
  return ans.toFixed(2);
}
