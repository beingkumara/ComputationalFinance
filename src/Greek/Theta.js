import Normal from "../Normal";

export function ThetaCall(inputValues) {
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
  const first =
    (S * sigma * Math.exp(-q * T) * Math.exp(0.5 * d1 * d1)) /
    (2 * Math.sqrt(2 * Math.PI * T));
  const second = r * K * Math.exp(-r * T) * Normal(d2);
  const third = q * S * Math.exp(-q * T) * Normal(d1);
  const result = (1 / T) * (-first - second + third);
  return result.toFixed(2);
}

export function ThetaPut(inputValues) {
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
  const first =
    (S * sigma * Math.exp(-q * T) * Math.exp(0.5 * d1 * d1)) /
    (2 * Math.sqrt(2 * Math.PI * T));
  const second = r * K * Math.exp(-r * T) * Normal(-d2);
  const third = q * S * Math.exp(-q * T) * Normal(-d1);
  const result = (1 / T) * (-first + second - third);
  return result.toFixed(2);
}
