import Normal from "../Normal";

export function blackScholesPut(inputValues) {
  // Calculate parameters
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const N = inputValues[6];
  const d1 =
    (Math.log(S / K) + (r - q + 0.5 * Math.pow(sigma, 2)) * T) /
    (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  const callValue =
    -S * Math.exp(-q * T) * Normal(-d1) + K * Math.exp(-r * T) * Normal(-d2);
  return callValue.toFixed(2);
}
