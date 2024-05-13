import React, { useState } from "react";
import { monteCarlo } from "./Call/Monetcarlo";
import { binomialTree } from "./Call/Binomialtree";
import { blackScholes } from "./Call/BlackScholes";
import { binomialPut } from "./Put/BinomialPut";
import { blackScholesPut } from "./Put/BlackScholesPut";
import { monteCarloPut } from "./Put/MonteCarloPut";
import { finiteDifference } from "./Call/FDMOriginal";
import { finiteDifferencePut } from "./Put/FDMPut";
import { deltaPut, deltaCall } from "./Greek/Delta";
import { gammaCallAndPut } from "./Greek/Gamma";
import { RhoCall, RhoPut } from "./Greek/Rho";
import { Vega } from "./Greek/Vega";
import { ThetaPut, ThetaCall } from "./Greek/Theta";
import Card from "./Card";
import Show from "./Show";
import Input from "./Input";
import { InputGroup } from "react-bootstrap";
import { deltaBinomial } from "./Greek/BinomialGreeks/BinDelta";
import { gammaBinomial } from "./Greek/BinomialGreeks/BinGamma";
import { vegaBinomial } from "./Greek/BinomialGreeks/BinVega";
import { rhoBinomial } from "./Greek/BinomialGreeks/BinRho";
import { thetaBinomial } from "./Greek/BinomialGreeks/BinTheta";
import { monteDelta } from "./Greek/MonteGreeks/MonteDelta";
import { monteGamma } from "./Greek/MonteGreeks/MonteGamma";
import { monteRho } from "./Greek/MonteGreeks/MonteRho";
import { monteVega } from "./Greek/MonteGreeks/MonteVega";
import { monteTheta } from "./Greek/MonteGreeks/MonteTheta";
import { fdmDelta } from "./Greek/FDMGreeks/FDMDelta";
import { fdmGamma } from "./Greek/FDMGreeks/FDMGamma";
import { fdmRho } from "./Greek/FDMGreeks/FDMRho";
import { fdmVega } from "./Greek/FDMGreeks/FDMVega";
import { fdmTheta } from "./Greek/FDMGreeks/FDMTheta";
import { americanBinomial } from "./Call/American/Binomial";
import { americanBinomialPut } from "./Put/American/AmericanBinomialPut";
import { deltaAmerican } from "./Call/American/BinDelta";
import { gammaAmerican } from "./Call/American/BinGamma";
import { thetaAmerican } from "./Call/American/BinTheta";
import { vegaAmerican } from "./Call/American/BinVega";
import { rhoAmerican } from "./Call/American/BinRho";
import { deltaAmPut } from "./Put/American/BinDelta";
import { gammaAmPut } from "./Put/American/BinGamma";
import { thetaAmPut } from "./Put/American/BinTheta";
import { vegaAmPut } from "./Put/American/BinVega";
import { rhoAmPut } from "./Put/American/BinRho";
import { americanMonteCarlo } from "./Put/American/MonteAmerican";
// import { Graph } from "./Graph/graph";

// import './Calculator.css'; // Import the CSS file for styling

const placeholders = [
  "Spot Price",
  "Strike Price",
  "Rate",
  "Volatility",
  "Dividend",
  "Maturity Time(Year)",
  "Number Of Simulations",
];
const names = ["Option Price", "Gamma", "Delta", "Theta", "Vega", "Rho"];

function Calculator() {
  const [operation, setOperation] = useState("SO");
  const [optionType, setOption] = useState("SOT");
  const [inputValues, setInputValues] = useState(["", "", "", "", "", "", ""]);
  const [result, setResult] = useState([]);
  // const [greeks, setGreeks] = useState({});
  // const [calcgreek, setgreekResult] = useState("");
  const [option, selectOption] = useState("");
  // const [greek, setGreek] = useState("");

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };
  const handleOption = (event) => {
    selectOption(event.target.value);
  };
  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };
  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  //newly added for american and european differntiation
  // const handleGreekChange = (event) => {
  //   setGreeks(event.target.value);
  // };

  const hadleAnswer = (event) => {
    event.preventDefault();
    handleCalculate(event);
    // handleCalculateGreek(event);
  };
  const handleCalculate = (event) => {
    event.preventDefault();
    let delta;
    let vega;
    let theta;
    let gamma;
    let rho;

    let computedResult;
    const S = inputValues[0];
    const k = inputValues[1];
    const r = inputValues[2];
    const sigma = inputValues[3];
    const q = inputValues[4];
    const T = inputValues[5];
    const N = inputValues[6];
    switch (optionType) {
      case "EO":
        switch (option) {
          case "Put":
            switch (operation) {
              case "BS":
                delta = deltaPut(inputValues);
                vega = Vega(inputValues);
                theta = ThetaPut(inputValues);
                gamma = gammaCallAndPut(inputValues);
                rho = RhoPut(inputValues);
                computedResult = blackScholesPut(inputValues);
                break;
              case "BT":
                delta = deltaBinomial(S, k, r, sigma, q, T, N);
                gamma = gammaBinomial(S, k, r, sigma, q, T, N);
                vega = vegaBinomial(S, k, r, sigma, q, T, N);
                rho = rhoBinomial(S, k, r, sigma, q, T, N);
                theta = thetaBinomial(S, k, r, sigma, q, T, N);
                computedResult = binomialTree(inputValues).toFixed(2);
                break;
              case "MC":
                delta = monteDelta(S, k, r, sigma, q, T, N).toFixed(2);
                gamma = monteGamma(S, k, r, sigma, q, T, N);
                rho = monteRho(S, k, r, sigma, q, T, N);
                vega = monteVega(S, k, r, sigma, q, T, N);
                theta = monteTheta(S, k, r, sigma, q, T, N);
                computedResult = monteCarloPut(inputValues);
                break;
              case "FDM":
                delta = fdmDelta(S, k, r, sigma, q, T, N);
                gamma = fdmGamma(S, k, r, sigma, q, T, N);
                rho = fdmRho(S, k, r, sigma, q, T, N);
                vega = fdmVega(S, k, r, sigma, q, T, N);
                theta = fdmTheta(S, k, r, sigma, q, T, N);
                computedResult = finiteDifferencePut(inputValues);
                break;

              default:
                computedResult = "";
            }
            break;
          case "Call":
            switch (operation) {
              case "BS":
                delta = deltaCall(inputValues);
                vega = Vega(inputValues);
                theta = ThetaCall(inputValues);
                gamma = gammaCallAndPut(inputValues);
                rho = RhoCall(inputValues);
                computedResult = blackScholes(inputValues);
                break;
              case "BT":
                delta = deltaBinomial(S, k, r, sigma, q, T, N);
                gamma = gammaBinomial(S, k, r, sigma, q, T, N);
                vega = vegaBinomial(S, k, r, sigma, q, T, N);
                rho = rhoBinomial(S, k, r, sigma, q, T, N);
                theta = thetaBinomial(S, k, r, sigma, q, T, N);
                computedResult = binomialTree(inputValues).toFixed(2);
                break;
              case "MC":
                delta = monteDelta(S, k, r, sigma, q, T, N).toFixed(2);
                gamma = monteGamma(S, k, r, sigma, q, T, N);
                rho = monteRho(S, k, r, sigma, q, T, N);
                vega = monteVega(S, k, r, sigma, q, T, N);
                theta = monteTheta(S, k, r, sigma, q, T, N);
                computedResult = monteCarlo(inputValues);
                break;
              case "FDM":
                delta = fdmDelta(S, k, r, sigma, q, T, N).toFixed(2);
                gamma = fdmGamma(S, k, r, sigma, q, T, N);
                rho = fdmRho(S, k, r, sigma, q, T, N);
                vega = fdmVega(S, k, r, sigma, q, T, N);
                theta = fdmTheta(S, k, r, sigma, q, T, N);
                computedResult = finiteDifference(inputValues);
                break;

              default:
                computedResult = "";
            }
            break;
          default:
            computedResult = "";
        }
        break;

      case "AO":
        switch (option) {
          case "Put":
            switch (operation) {
              case "BS":
                computedResult =
                  "The Black-Scholes model is only used to price European options and does not take into account that American options could be exercised before the expiration date";
                break;
              case "BT":
                delta = deltaAmPut(S, k, r, sigma, q, T, N);
                gamma = gammaAmPut(S, k, r, sigma, q, T, N);
                vega = vegaAmPut(S, k, r, sigma, q, T, N);
                rho = rhoAmPut(S, k, r, sigma, q, T, N);
                theta = thetaAmPut(S, k, r, sigma, q, T, N);
                computedResult = americanBinomialPut(inputValues);
                break;
            }
            break;

          case "Call":
            switch (operation) {
              case "BS":
                computedResult =
                  "The Black-Scholes model is not directly applicable to pricing American options. Alternative methods like LSMC or lattice models are typically employed to account for early exercise possibilities.";
                break;

              case "BT":
                delta = deltaAmerican(S, k, r, sigma, q, T, N);
                gamma = gammaAmerican(S, k, r, sigma, q, T, N);
                vega = vegaAmerican(S, k, r, sigma, q, T, N);
                rho = rhoAmerican(S, k, r, sigma, q, T, N);
                theta = thetaAmerican(S, k, r, sigma, q, T, N);
                computedResult = americanBinomial(inputValues);
                break;

              case "MC":
                computedResult = americanMonteCarlo(inputValues);
                break;
            }
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }

    // setInputValues(["", "", "", "", "", "", ""]);

    setResult([computedResult, gamma, delta, theta, vega, rho]);
  };

  return (
    <div className="row ">
      <div className="col-md-6 calculator">
        <h1>Option Calculator</h1>
        <form onSubmit={hadleAnswer}>
          <div className="inputs-container">
            {inputValues.map((value, index) => (
              <Input
                key={index}
                value={value}
                onChange={(event) => handleInputChange(event, index)}
                placeholder={placeholders[index]}
              />
            ))}
          </div>

          <select
            className="operation-select"
            value={optionType}
            onChange={handleOptionChange}
            placeholder="Select Option"
          >
            <option value="SOT" disabled hidden>
              SELECT OPTION TYPE
            </option>
            <option value="EO">EUROPEAN OPTION</option>
            <option value="AO">AMERICAN OPTION</option>
          </select>

          <select
            className="operation-select"
            value={operation}
            onChange={handleOperationChange}
            placeholder="Select Option"
          >
            <option value="SO" disabled hidden>
              SELECT METHOD
            </option>
            <option value="BS">BLACK SCHOLES</option>
            <option value="BT">BINOMIAL TREE</option>
            <option value="MC">MONTE CARLO</option>
            <option value="FDM">FINITE DIFFERENCE METHOD</option>
          </select>
          <div className="row" style={{ margin: "10px" }}>
            <div className="col-sm 6 form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={handleOption}
                value="Put"
              />
              <label className="form-check-label" style={{ color: "white" }}>
                Put
              </label>
            </div>
            <div className="col-sm 6 form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleOption}
                value="Call"
              />

              <label className="form-check-label" style={{ color: "white" }}>
                Call
              </label>
            </div>
          </div>
          <button type="submit" className="calculate-btn">
            Calculate
          </button>
        </form>
        <p className="result">
          {result.map((value, index) => (
            <Show name={names[index]} val={value}></Show>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Calculator;

// keep this code for now. i have a few questions and changes to make.
