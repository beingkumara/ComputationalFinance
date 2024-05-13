import generatePricePath from "../Generate";

export function monteCarloPut(inputValues) {
  const spotPrice = inputValues[0];
  const strikePrice = inputValues[1];
  const riskFreeRate = inputValues[2];
  const volatility = inputValues[3];
  const dividendYield = inputValues[4];
  const timeToMaturity = inputValues[5];
  const numberOfSimulations = inputValues[6];
  let totalPayoff = 0;
  for (let i = 0; i < numberOfSimulations; i++) {
    // Generate a random price path
    const pricePath = generatePricePath(
      spotPrice,
      riskFreeRate,
      volatility,
      timeToMaturity
    );

    // Calculate the option payoff
    const payoff = Math.max(strikePrice - pricePath[pricePath.length - 1] , 0);

    // Discount the payoff to present value
    const discountedPayoff = payoff * Math.exp(-riskFreeRate * timeToMaturity);

    // Accumulate the payoffs
    totalPayoff += discountedPayoff;
  }

  // Calculate the average payoff
  const averagePayoff = totalPayoff / numberOfSimulations;

  // Calculate the option price
  const optionPrice = averagePayoff;

  return optionPrice.toFixed(2);
}
