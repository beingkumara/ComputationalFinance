export default function Normal(x) {
  // Approximation of the cumulative distribution function of the standard normal distribution
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-Math.pow(x, 2) / 2);
  const p =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if (x > 0) {
    return 1 - p;
  } else {
    return p;
  }
}
