import React from "react";

// import "react-mathjax2/dist/style.css";
function Greek() {
  return (
    <div className="option">
      <div className="optionContainer">
        <h2>OPTION GREEKS </h2>
        <p>
          Option Greeks are measures used in options trading to assess the risk
          and potential profitability of options positions. They quantify the
          impact of various factors on the price of options, such as changes in
          the underlying asset price, time decay, implied volatility, and
          interest rates. The most commonly used option Greeks are described
          below.
        </p>
        <img
          style={{ width: "100%" }}
          src="https://images.ctfassets.net/lnmc2aao6j57/3VTbIHNGGgjLyzUx2qfzhs/b961442af4e305a93a6417a5bb76cda6/info-options_greeks-mobile.png"
          alt="greeks"
        />
        <hr />
        <h4>DELTA(&Delta;)</h4>
        <p>
          Delta measures the rate of change of the option's price in relation to
          changes in the underlying asset price. It indicates how much the
          option price is expected to move for a $1 change in the underlying
          asset.
          <br />
        </p>
        <h4>GAMMA(&Gamma;)</h4>
        <p>
          Gamma represents the rate of change of the option's delta in response
          to changes in the underlying asset price. It quantifies the
          acceleration or deceleration of delta and indicates the potential
          change in delta for a $1 change in the underlying asset.
        </p>
        <h4>VEGA(&nu;)</h4>
        <p>
          Vega quantifies the sensitivity of the option's price to changes in
          implied volatility. It measures the impact of a 1% change in the
          implied volatility on the option price
        </p>
        <h4>RHO(&rho;)</h4>
        <p>
          Rho measures the sensitivity of the option's price to changes in
          interest rates. It indicates the expected change in the option price
          for a 1% change in the risk-free interest rate.
        </p>
        <h4>THETA(&Theta;)</h4>
        <p>
          Theta measures the rate of time decay in the option's price as time
          passes. It represents the daily decrease in option value due to the
          erosion of extrinsic value, primarily influenced by time.
        </p>
      </div>
    </div>
  );
}

export default Greek;
