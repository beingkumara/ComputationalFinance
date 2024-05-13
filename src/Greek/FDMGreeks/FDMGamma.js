import { fdmDelta } from "./FDMDelta";

export function fdmGamma(S, k, r, sigma, q, T, N) {
  let s1 = S * (1 + 0.01);
  let s2 = S * (1 - 0.01);
  let d1 = fdmDelta(s1, k, r, sigma, q, T, N);
  let d2 = fdmDelta(s2, k, r, sigma, q, T, N);
  let gamma = (d2 - d1) / (2 * S * 0.01);
  return gamma;
}
