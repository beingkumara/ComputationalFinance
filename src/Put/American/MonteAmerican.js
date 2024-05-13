export function americanMonteCarlo(inputValues) {
  const S = inputValues[0];
  const K = inputValues[1];
  const r = inputValues[2];
  const sigma = inputValues[3];
  const q = inputValues[4];
  const T = inputValues[5];
  const n_simulations = inputValues[6];
  const n_steps = 100;
  const dt = T / n_steps;
  let rand = [];
  for (let i = 0; i < n_steps; i++) {
    const row = [];
    for (let j = 0; j < n_simulations; j++) {
      row.push(Math.random()); // Using Math.random() as JavaScript doesn't have a built-in normal distribution function
    }
    rand.push(row);
  }

  // Simulate stock price paths
  let S_path = [];
  for (let i = 0; i < n_steps; i++) {
    let row = [];
    for (let j = 0; j < n_simulations; j++) {
      if (i === 0) {
        row.push(S);
      } else {
        const prevS = S_path[i - 1][j];
        const nextS =
          prevS *
          Math.exp(
            (r - 0.5 * sigma ** 2) * dt + sigma * Math.sqrt(dt) * rand[i][j]
          );
        row.push(nextS);
      }
    }
    S_path.push(row);
  }

  let payoff = [];
  for (let i = 0; i < n_steps; i++) {
    const row = [];
    for (let j = 0; j < n_simulations; j++) {
      row.push(Math.max(K - S_path[i][j], 0));
    }
    payoff.push(row);
  }
  // Initialize option value matrix
  let option_value = [];
  for (let i = 0; i < n_steps; i++) {
    const row = [];
    for (let j = 0; j < n_simulations; j++) {
      row.push(0);
    }
    option_value.push(row);
  }

  // Set the option value at maturity
  for (let j = 0; j < n_simulations; j++) {
    option_value[n_steps - 1][j] = payoff[n_steps - 1][j];
  }

  // Calculate option value
  for (let t = n_steps - 2; t >= 0; t--) {
    // Calculate the intrinsic value of the option
    let intrinsic_value = [];
    for (let j = 0; j < n_simulations; j++) {
      intrinsic_value.push(Math.max(K - S_path[t][j], 0));
    }

    // The option value at each time step is the maximum of the intrinsic value and the continuation value
    for (let j = 0; j < n_simulations; j++) {
      option_value[t][j] = Math.max(intrinsic_value[j], option_value[t + 1][j]);
    }
  }

  // Calculate the option price by averaging over all simulations
  let option_price = 0;
  for (let j = 0; j < n_simulations; j++) {
    option_price += option_value[0][j];
  }
  option_price /= n_simulations;

  return option_price;
}
