import { binomialTree } from "../../Call/Binomialtree";

export function rhoBinomial(S, k, r, sigma, q, T, N) {
  let diff = r * 0.001;
  let r1 = r * (1 + 0.001);
  let arr = [S, k, r, sigma, q, T, N];
  let d1 = 0;
  let d2 = 0;
  let rho = 0;
  if (r < diff) {
    arr[2] = r1;
    d1 = binomialTree(arr);
    arr[2] = r;
    d2 = binomialTree(arr);
    rho = (d1 - d2) / (r * 0.001);
    return rho;
  } else {
    r2 = r * (1 - 0.001);
    arr[2] = r1;
    d1 = binomialTree(arr);
    arr[2] = r2;
    d2 = binomialTree(arr);
    rho = (d1 - d2) / (2 * r * 0.001);
    return rho;
  }
}
