import { deltaAmerican } from "./BinDelta";

export function gammaAmerican(S, K, rate, sigma, q, T, N) {
  let temp = S * 0.01;
  let s1 = S + temp;
  let s2 = S - temp;
  let d1 = deltaAmerican(s1, K, rate, sigma, q, T, N);
  let d2 = deltaAmerican(s2, K, rate, sigma, q, T, N);
  let gamma = (d1 - d2) / (2 * temp);
  return gamma.toFixed(2);
}
