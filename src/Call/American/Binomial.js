export function americanBinomial(inputValues) {
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const n = inputValues[6];
  const delta_t = T / n;
  const u = Math.exp(sigma * Math.sqrt(delta_t));
  const d = 1 / u;
  const p = (Math.exp(r * delta_t) - d) / (u - d);

  let stockTree = [];
  let temp = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      temp.push(0);
    }
    stockTree.push(temp);
    temp = [];
  }
  let optionTree = [];
  temp = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      temp.push(0);
    }
    optionTree.push(temp);
    temp = [];
  }
  for (let j = 0; j <= n; j++) {
    for (let i = 0; i <= j; i++) {
      stockTree[i][j] = S * Math.pow(u, j - i) * Math.pow(d, i);
    }
  }

  optionTree.forEach((row, j) => {
    row[n] = Math.max(0, stockTree[j][n] - K);
  });

  for (let j = n - 1; j >= 0; j--) {
    for (let i = 0; i <= j; i++) {
      optionTree[i][j] = Math.max(
        stockTree[i][j] - K,
        Math.exp(-r * delta_t) *
          (p * optionTree[i][j + 1] + (1 - p) * optionTree[i + 1][j + 1])
      );
    }
  }

  return optionTree[0][0];
}

// Example usage:
// console.log(americanBinomial(100, 100, 0.05, 1, 0.2, 100));
