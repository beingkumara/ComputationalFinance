import { monteCarlo } from "../../Call/Monetcarlo";

export function monteRho(S, k, r, sigma, q, T, N) {
  let diff = r * 0.01;
  let d1 = 0;
  let d2 = 0;
  let rho = 0;
  let arr = [S, k, r, sigma, q, T, N];
  let temp = 0;
  if (r < diff) {
    temp = r * (1 + 0.01);
    arr[2] = temp;
    d1 = monteCarlo(arr);
    arr[2] = r;
    d2 = monteCarlo(arr);
    rho = (d1 - d2) / (r * 0.01);
  } else {
    temp = r * (1 + 0.01);
    arr[2] = temp;
    d1 = monteCarlo(arr);
    temp = r * (1 - 0.01);
    arr[2] = temp;
    d2 = monteCarlo(arr);
    rho = (d1 - d2) / (2 * r * 0.01);
  }
  return rho.toFixed(2);
}
