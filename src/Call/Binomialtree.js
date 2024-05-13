export function binomialTree(inputValues) {
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const N = inputValues[6];
  const deltaT = T / N;
  const u = Math.exp(sigma * Math.sqrt(deltaT));
  const d = 1 / u;
  const mu = r - q * 0.5 * sigma ** 2;
  const p_u = 0.5 * (1 + (mu / sigma) * Math.sqrt(deltaT));
  const p_d = 0.5 * (1 - (mu / sigma) * Math.sqrt(deltaT));
  let V = [];
  let temp = [];
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= N; j++) {
      temp.push(0);
    }
    V.push(temp);
    temp = [];
  }
  for (let i = 0; i <= N; i++) {
    V[i][N] = Math.max(u ** i * d ** (N - i) * S - K, 0);
  }

  for (let n = N - 1; n >= 0; n--) {
    for (let i = 0; i <= n; i++) {
      V[i][n] =
        (1 / (1 + r * deltaT)) * (p_u * V[i + 1][n + 1] + p_d * V[i][n + 1]);
    }
  }
  const price = V[0][0];
  return price;
}
