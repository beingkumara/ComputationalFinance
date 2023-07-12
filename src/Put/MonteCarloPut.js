export function monteCarloPut(inputValues) {
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const numSimulations = inputValues[6];
  const dt = T / 365; // Time step (assuming 365 days in a year)
  const sqrtDt = Math.sqrt(dt);

  let totalPayoff = 0;
  for (let i = 0; i < numSimulations; i++) {
    const z = generateStandardNormalRandom();
    const drift = (r - 0.5 * Math.pow(sigma, 2)) * dt;
    const diffusion = sigma * sqrtDt;
    const stockPrice = S * Math.exp(drift + diffusion * z);
    const payoff = Math.max(stockPrice - K, 0);
    totalPayoff += payoff;
  }

  const averagePayoff = totalPayoff / numSimulations;
  const presentValue = averagePayoff * Math.exp(-r * T);
  return presentValue.toFixed(2);
}

function generateStandardNormalRandom() {
  // Generate a random number from a standard normal distribution using the Box-Muller transform
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); // Exclude zero to avoid infinite result
  while (v === 0) v = Math.random();
  const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return z;
}
