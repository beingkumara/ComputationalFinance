import { finiteDifference } from "../../Call/FDMOriginal";

export function fdmRho(S, k, r, sigma, q, T, N) {
  let diff = r * 0.01;
  let r1 = r * (1 + 0.01);
  let arr = [S, k, r, sigma, q, T, N];
  let d1 = 0;
  let d2 = 0;
  let rho = 0;
  if (r < diff) {
    arr[2] = r1;
    d1 = finiteDifference(arr);
    arr[2] = r;
    d2 = finiteDifference(arr);
    rho = (d1 - d2) / (r * 0.01);
    return rho;
  } else {
    r2 = r * (1 - 0.01);
    arr[2] = r1;
    d1 = finiteDifference(arr);
    arr[2] = r2;
    d2 = finiteDifference(arr);
    rho = (d1 - d2) / (2 * r * 0.01);
    return rho;
  }
}
