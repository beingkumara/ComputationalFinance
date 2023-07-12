function generatePricePath(
  spotPrice,
  riskFreeRate,
  volatility,
  timeToMaturity
) {
  const pricePath = [spotPrice];

  for (let t = 0; t < timeToMaturity; t++) {
    const drift = riskFreeRate - 0.5 * Math.pow(volatility, 2);
    const diffusion = volatility * Math.sqrt(1);
    const randomShock = standardNormalRandom();
    const price =
      pricePath[pricePath.length - 1] *
      Math.exp(drift + diffusion * randomShock);
    pricePath.push(price);
  }

  return pricePath;
}

function standardNormalRandom() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

export default generatePricePath;
