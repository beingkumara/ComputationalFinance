import { americanBinomialPut } from "./AmericanBinomialPut";

export function deltaAmPut(S, K, r, sigma, q, T, N) {
  let s1 = S * (1 + 0.001);
  let s2 = S * (1 - 0.001);
  let arr = [s1, K, r, sigma, q, T, N];
  let d1 = americanBinomialPut(arr);
  arr[0] = s2;
  let d2 = americanBinomialPut(arr);
  const delta = (d1 - d2) / (2 * S * 0.001);
  return delta.toFixed(2);
}
