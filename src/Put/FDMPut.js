export function finiteDifferencePut(inputValues) {
  // Define constants
const spotPrice = inputValues[0];
const strikePrice = inputValues[1];
const riskFreeRate = inputValues[2];
const volatility = inputValues[3];
const dividendYield = inputValues[4];
const timeToMaturity = inputValues[5];
const N = inputValues[6];
let Nj = N;
let K = strikePrice;
let sigma = volatility;
let r = riskFreeRate;

  let dt = timeToMaturity / N;
  let dx = volatility * Math.sqrt(3 * dt);
  let nu = riskFreeRate - dividendYield - 0.5 * sigma ** 2;
  let pu = 0.5 * dt * ((sigma / dx) ** 2 + nu / dx);
  let pm = 1.0 - dt * (sigma / dx) ** 2 - r * dt;
  let pd = 0.5 * dt * ((sigma / dx) ** 2 - nu / dx);
  let grid =[]

  // let grid = new Array(N + 1).fill().map(() => new Array(2 * Nj + 1).fill(0));
  for(let i = 0 ;i< N+1;i++){
      let temp=[]
      for(let j=0;j<=2*Nj;j++){
          temp[j]=0;
      }
      grid.push(temp);
  }
  // Asset prices at maturity
  let St = [spotPrice * Math.exp(-Nj * dx)];
  for (let j = 1; j <= 2 * Nj; j++) {
      St.push(St[j - 1] * Math.exp(dx));
  }

  // Option value at maturity
  for (let j = 0; j <= 2 * Nj; j++) {
      grid[N][j] = Math.max(0, K - St[j]);
  }

  // Backwards computing through grid
  for (let i = N - 1; i >= 0; i--) {
      for (let j = 1; j < 2 * Nj; j++) {
          grid[i][j] = pu * grid[i + 1][j + 1] + pm * grid[i + 1][j] + pd * grid[i + 1][j - 1];
      }

      // Boundary conditions
      grid[i][0] = grid[i][1];
      grid[i][2 * Nj] = grid[i][2 * Nj - 1] + (St[2 * Nj] - St[2 * Nj - 1]);
  }

  return grid[0][Nj];
}
