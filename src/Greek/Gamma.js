export function gammaCallAndPut(inputValues) {
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const d1 =
    (Math.log(S / K) + (r - q + 0.5 * Math.pow(sigma, 2)) * T) /
    (sigma * Math.sqrt(T));
  const result =
    (Math.exp(-q * T) * Math.exp(0.5 * d1 * d1)) /
    (S * sigma * Math.sqrt(2 * Math.PI * T));

  return result.toFixed(2);
}
