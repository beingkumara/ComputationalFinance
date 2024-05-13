import { americanBinomialPut } from "./AmericanBinomialPut";

export function vegaAmPut(S, K, r, sigma, q, T, N) {
  let sigma1 = sigma * (1 + 0.001);
  let sigma2 = sigma * (1 - 0.001);
  let arr = [S, K, r, sigma1, q, T, N];
  let d1 = americanBinomialPut(arr);
  arr[3] = sigma2;
  let d2 = americanBinomialPut(arr);
  let vega = (d1 - d2) / (2 * sigma * 0.001);
  return vega;
}
