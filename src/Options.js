import React from "react";

function Option() {
  return (
    // <body style={{ backgroundColor: "#0091ad" }}>
    <div className="option">
      <div className=" optionContainer">
        <h2>EUROPEAN STYLE OPTION</h2>
        <p>
          {" "}
          A European option is a version of an options contract that limits
          execution to its expiration date. In other words, if the underlying
          security, such as a stock, has moved in price, an investor cannot
          exercise the option early and take delivery of or sell the shares
        </p>

        <h4>Call Option</h4>
        <p>
          A European call option gives the owner the right to acquire the
          underlying security at expiry. For an investor to profit from a call
          option, the stock's price, at expiry, has to be trading high enough
          above the strike price to cover the cost of the option premium.
        </p>

        <h4>Put Option</h4>
        <p>
          A European put option allows the holder to sell the underlying
          security at expiry. For an investor to profit from a put option, the
          stock's price, at expiry, has to be trading far enough below the
          strike price to cover the cost of the option premium.
        </p>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              className="w-100 img-fluid"
              src="../images/callPut.jpg"
              alt="callandput"
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              className="w-100 img-fluid"
              src="../images/premium.jpg"
              alt="premium"
            />
          </div>
        </div>

        <hr />
        <h2>AMERICAN STYLE OPTION</h2>
        <p>
          American options give the option holder the right to buy or sell an
          underlying asset at a specific price before a certain date. Unlike
          European options, which can only be exercised on the expiration date,
          American options can be exercised anytime before the expiration date.
          This flexibility makes American options more valuable, but it also
          comes with an additional cost.
        </p>

        <h4>Call Option</h4>
        <p>
          With an American call option, the person who holds the option can
          choose to receive the underlying stock or security at any time during
          the contract period. This can be on any day leading up to and
          including the expiration day. It's important to note that the option
          holder is not obligated to receive the shares and can decide not to
          exercise their right. The strike price, which is the agreed-upon
          price, remains constant throughout the contract.{" "}
        </p>

        <h4>Put Option</h4>
        <p>
          An American put option allows the buyer to sell the underlying asset
          at any time before the expiration date. This gives the buyer the
          flexibility to sell the asset to the seller whenever the price drops
          below the agreed-upon strike price.{" "}
        </p>
        <div className="image">
          <img src="../images/optionDifference.jpg" alt="optionDifference" />
        </div>
        <hr />
        <h2>DIGITAL OPTION</h2>
        <p>
          A digital option is a type of option that provides a fixed payout if
          the underlying market moves beyond the strike price. As long as
          traders correctly predict the outcome, they’ll make a profit. If their
          prediction is incorrect, they’ll lose the premium they paid.{" "}
        </p>

        <h4>Call Option</h4>
        <p>
          In a digital call option, if the price of the underlying asset is
          higher than the strike price at expiration, the buyer receives a fixed
          payout, typically a predetermined amount. However, if the price of the
          underlying asset is equal to or below the strike price, the buyer
          receives no payout, and the option expires worthless.{" "}
        </p>

        <h4>Put Option</h4>
        <p>
          In a digital put option, if the price of the underlying asset is lower
          than the strike price at expiration, the buyer receives a fixed
          payout, typically a predetermined amount. However, if the price of the
          underlying asset is equal to or above the strike price, the buyer
          receives no payout, and the option expires worthless.{" "}
        </p>
        <div className="image">
          <img src="../images/digital-option.png" alt="digital" />
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
}

export default Option;
