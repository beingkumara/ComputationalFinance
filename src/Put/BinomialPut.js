export function binomialPut(inputValues) {
  const spotPrice = inputValues[0];
  const strikePrice = inputValues[1];
  const riskFreeRate = inputValues[2];
  const volatility = inputValues[3];
  const dividendYield = inputValues[4];
  const timeToMaturity = inputValues[5];
  const numberOfSimulations = inputValues[6];

  const deltaT = timeToMaturity / numberOfSimulations;
  const upFactor = Math.exp(
    (riskFreeRate - dividendYield) * deltaT + volatility * Math.sqrt(deltaT)
  );
  const downFactor = 1 / upFactor;

  // Build the binomial tree
  const binomialTree = [];
  for (let i = 0; i <= numberOfSimulations; i++) {
    const nodePrice =
      spotPrice *
      Math.pow(upFactor, i) *
      Math.pow(downFactor, numberOfSimulations - i);
    binomialTree.push(nodePrice);
  }

  // Calculate the option payoffs at each node
  const optionPayoffs = [];
  for (let i = 0; i <= numberOfSimulations; i++) {
    const nodePayoff = Math.max(strikePrice - binomialTree[i], 0);
    optionPayoffs.push(nodePayoff);
  }

  // Perform backward induction to calculate option price
  for (let i = numberOfSimulations - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const expectedValue = 0.5 * optionPayoffs[j] + 0.5 * optionPayoffs[j + 1];

      optionPayoffs[j] = expectedValue;
    }
  }

  const optionPrice = optionPayoffs[0];
  return optionPrice.toFixed(2);
}
