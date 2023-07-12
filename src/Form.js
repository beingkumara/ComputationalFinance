import React, { useState } from "react";
import { monteCarlo } from "./Call/Monetcarlo";
import { binomailTree } from "./Call/Binomialtree";
import { blackScholes } from "./Call/BlackScholes";
import { binomialPut } from "./Put/BinomialPut";
import { blackScholesPut } from "./Put/BlackScholesPut";
import { monteCarloPut } from "./Put/MonteCarloPut";
import { deltaPut, deltaCall } from "./Greek/Delta";
import { gammaCallAndPut } from "./Greek/Gamma";
import { RhoCall, RhoPut } from "./Greek/Rho";
import { Vega } from "./Greek/Vega";
import { ThetaPut, ThetaCall } from "./Greek/Theta";
import Card from "./Card";
import Show from "./Show";
import Input from "./Input";
import { InputGroup } from "react-bootstrap";

// import './Calculator.css'; // Import the CSS file for styling

const placeholders = [
  "Spot Price",
  "Strike Price",
  "Rate",
  "Volatility",
  "Dividend",
  "Maturity Time(Year)",
  "Number Of Simulations"
];
const names = ["Option Price", "Gamma", "Delta", "Theta", "Vega", "Rho"];

function Calculator() {
  const [operation, setOperation] = useState("SO");
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
    switch (option) {
      case "Put":
        delta = deltaPut(inputValues);
        vega = Vega(inputValues);
        theta = ThetaPut(inputValues);
        gamma = gammaCallAndPut(inputValues);
        rho = RhoPut(inputValues);
        switch (operation) {
          case "BS":
            computedResult = blackScholesPut(inputValues);
            break;
          case "BT":
            computedResult = binomialPut(inputValues);
            break;
          case "MC":
            computedResult = monteCarloPut(inputValues);
            break;

          default:
            computedResult = "";
        }
        break;
      case "Call":
        delta = deltaCall(inputValues);
        vega = Vega(inputValues);
        theta = ThetaCall(inputValues);
        gamma = gammaCallAndPut(inputValues);
        rho = RhoCall(inputValues);
        switch (operation) {
          case "BS":
            computedResult = blackScholes(inputValues);
            break;
          case "BT":
            computedResult = binomailTree(inputValues);
            break;
          case "MC":
            computedResult = monteCarlo(inputValues);
            break;

          default:
            computedResult = "";
        }
        break;
      default:
        computedResult = "";
    }
    // setInputValues(["", "", "", "", "", "", ""]);

    setResult([computedResult, gamma, delta, theta, vega, rho]);
  };
  // const handleCalculateGreek = (event) => {
  //   event.preventDefault();
  //   let greekResult;
  //   switch (option) {
  //     case "Call":
  //       switch (greek) {
  //         case "Delta":
  //           greekResult = deltaCall(inputValues);
  //           break;
  //         case "Gamma":
  //           greekResult = gammaCallAndPut(inputValues);
  //           break;
  //         case "Rho":
  //           greekResult = RhoCall(inputValues);
  //           break;
  //         case "Theta":
  //           greekResult = ThetaCall(inputValues);
  //           break;
  //         case "Vega":
  //           greekResult = Vega(inputValues);
  //           break;
  //         default:
  //           greekResult = "Greeks";
  //       }
  //       break;
  //     case "Put":
  //       switch (greek) {
  //         case "Delta":
  //           greekResult = deltaPut(inputValues);
  //           break;
  //         case "Gamma":
  //           greekResult = gammaCallAndPut(inputValues);
  //           break;
  //         case "Rho":
  //           greekResult = RhoPut(inputValues);
  //           break;
  //         case "Theta":
  //           greekResult = ThetaPut(inputValues);
  //           break;
  //         case "Vega":
  //           greekResult = Vega(inputValues);
  //           break;
  //         default:
  //           greekResult = "Greeks";
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   setgreekResult(greekResult);
  // };

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
      {/* <Card /> */}
      {/* </div> */}
      {/* <div className="col-md-6 greek ">
        <h1>Option Greeks</h1>
        <form onSubmit={handleCalculateGreek} style={{ color: "white" }}>
          <div className="form-check ">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={handleGreekChange}
              value="Delta"
            />
            <label className="form-check-label">Delta</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={handleGreekChange}
              value="Gamma"
            />
            <label className="form-check-label">Gamma</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Rho"
              onChange={handleGreekChange}
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Rho
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Vega"
              onChange={handleGreekChange}
            />
            <label className="form-check-label">Vega</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Theta"
              onChange={handleGreekChange}
            />
            <label className="form-check-label">Theta</label>
          </div>
          <button type="submit" className="calculate-btn calculate-btn2">
            Calculate
          </button>
        </form>
        <p className="result">
          Greek:
          <br /> {calcgreek}
        </p>
      </div> */}
    </div>
  );
}

export default Calculator;

// keep this code for now. i have a few questions and changes to make.
