import { finiteDifference } from "../../Call/FDMOriginal";

export function fdmDelta(S, k, r, sigma, q, T, N) {
  let s1 = S * (1 + 0.01);
  let s2 = S * (1 - 0.01);
  let arr = [s1, k, r, sigma, q, T, N];
  let d1 = finiteDifference(arr);
  arr[0] = s2;
  let d2 = finiteDifference(arr);
  let delta = (d2 - d1) / (2 * S * 0.01);
  return delta;
}
