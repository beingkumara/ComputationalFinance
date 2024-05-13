import { monteCarlo } from "../../Call/Monetcarlo";

export function monteTheta(S, k, r, sigma, q, T, N) {
  let t1 = T * (1 + 1 / 252);
  let t2 = T * (1 - 1 / 252);
  let arr = [S, k, r, sigma, q, t1, N];
  let d1 = monteCarlo(arr);
  arr[5] = t2;
  let d2 = monteCarlo(arr);
  let theta = (d1 - d2) / (2 * (1 / 252));
  return theta.toFixed(2);
}
