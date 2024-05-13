import { finiteDifference } from "../../Call/FDMOriginal";

export function fdmTheta(S, k, r, sigma, q, T, N) {
  let dt = 1 / 252;
  let arr = [S, k, r, sigma, q, T, N];
  let t1 = T;
  t1 = T * (1 + dt);
  let t2 = T - dt;
  arr[5] = t1;
  let d1 = finiteDifference(arr);
  arr[5] = t2;
  let d2 = finiteDifference(arr);
  let theta = (d2 - d1) / (2 * dt);
  return theta.toFixed(2);
}
