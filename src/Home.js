import React from "react";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="option">
      <section className="homeImg"></section>
      <div className="optionContainer">
        <h2>What is Derivative Security?</h2>
        <p>
          A financial contract whose value depends upon or derived from one or
          more underlying assets such as Stocks, Bonds, Foreign Currency,
          Commodities, etc.
        </p>
        <p>
          <h4>Examples:</h4>Forward Contract, Future Contract, Option, etc.
        </p>
        <hr />
        <h2>What is an Option?</h2>
        <p>
          An option gives the right, but not the obligation, to buy or sell a
          certain financial asset by a certain expiration date, for a certain
          strike price.
        </p>
        <p>
          <h4>Examples:</h4>European Option, Digital Option, American Option,
          etc.
        </p>
        <hr />
        <p>
          Before diving in, it's crucial to acquaint yourself with some
          fundamental concepts. Here are a few key terms you should become
          familiar with as you embark on your learning journey.
        </p>
        <h4>Strike Price(K)</h4>
        <p>
          Let's imagine you have the opportunity to buy or sell something in the
          future, like a toy car. The strike price is like a special price tag
          that determines how much you can buy or sell that toy car for.
          <br />
          If you have a call option, it means you have the right to buy the toy
          car at a certain price in the future. That certain price is the strike
          price. So, if the strike price is $10, you can buy the toy car for $10
          even if its actual price in the market is higher.
          <br />
          On the other hand, if you have a put option, it means you have the
          right to sell the toy car at a certain price in the future. Again,
          that certain price is the strike price. So, if the strike price is
          $10, you can sell the toy car for $10 even if its actual price in the
          market is lower.
          <br />
          The strike price acts as a reference point or a target price for the
          option holder to buy or sell the underlying security (like the toy
          car) at a future date, regardless of its actual market value.
          <br />
          The strike price is often represented as 'K'.
        </p>
        <h4>Spot Price(S0)</h4>
        <p>
          The spot price refers to the current market price or immediate value
          of an asset. It's the price at which an asset can be bought or sold
          for immediate delivery or settlement. Think of it as the "right now"
          price you would pay or receive if you were to buy or sell something at
          this very moment. The spot price can fluctuate throughout the day as
          it reflects the real-time supply and demand of the asset in the
          market.
          <br />
          The spot price is often represented as 'S0'.
        </p>
        <h4>Rate of Interest (r)</h4>
        <p>
          The rate of interest, in simple terms, is the percentage of additional
          money you either earn or have to pay when you borrow or lend money. It
          represents the cost or return associated with using someone else's
          money.
          <br />
          The rate of interest is usually expressed as an annual percentage, and
          it can vary depending on factors such as the type of loan or
          investment, the lender's policies, and prevailing market conditions.
          Higher interest rates generally mean higher borrowing costs and
          potentially higher returns on investments.
          <br />
          It is represented as 'r'
        </p>
        <h4>Volatility(&sigma;)</h4>
        <p>
          Volatility refers to the measure of how much the price of a financial
          instrument, such as a stock or an option, is expected to fluctuate
          over a given period of time.
          <br />
          To understand it simply, imagine you're predicting the future price of
          a stock. If the stock's price tends to change a lot and experiences
          big swings up and down, we say it has high volatility. On the other
          hand, if the stock's price stays relatively stable without much
          movement, we say it has low volatility.
          <br />
          It is represented as '&sigma;'{" "}
        </p>
        <h4>Dividend(q)</h4>
        <p>
          A dividend refers to a distribution of a portion of a company's
          profits or earnings to its shareholders. It is a way for a company to
          share its financial success with its shareholders.
          <br />
          When a company generates profits, it has a few options on how to
          allocate those profits. One option is to reinvest the profits back
          into the business for expansion, research and development, or other
          growth opportunities. Another option is to pay out a portion of the
          profits as dividends to its shareholders.
        </p>

        <h4>Expiration Date(T)</h4>
        <p>
          The expiration date, also known as the maturity date or maturity time,
          is the specific date on which an option contract or other financial
          instrument becomes invalid or ceases to exist. It is the last day on
          which the option holder can exercise their right to buy or sell the
          underlying asset at the predetermined price (strike price).
        </p>
        <div className="imgClass">
          <img
            src="https://www.wallstreetmojo.com/wp-content/uploads/2022/04/Price-Fluctuation-of-Volatility.jpg.webp"
            alt="volatility"
          />
          <p>
            <Link
              to="https://www.wallstreetmojo.com/volatility/"
              className="nav-link"
            >
              {" "}
              Source
            </Link>
          </p>
        </div>
        <hr />
        <h2>What is Option Premium?</h2>
        <p>
          Options are popular among investors since they enhance numerous market
          techniques. Do you believe a stock will rise? If you are correct,
          purchasing a call option allows you to buy shares at a discount to the
          market value later. That means large profits if the stock goes up.
          Want to reduce your risk if your stock falls unexpectedly? With a put
          option, you may sell the stock at an agreed-upon price later and
          minimize your losses.
        </p>

        <h4> Intrinsic Value</h4>
        <p>
          It is the amount of money investors would get if they exercised the
          option immediately. When the difference is positive, it is equal to
          the difference between the strike or exercise price and the asset's
          current market value.
          {/* <br />
            For example an investor bought a call option at a strike price of $4
            and the spot price is $50. The intrinsic value of the stock is $10. */}
        </p>

        <h4>Time Value</h4>

        <p>
          The time value of an options contract means that even if the contract
          doesn't have any immediate value because the market conditions are not
          favourable, it can still become valuable if there is a significant
          change in the underlying asset price. This is because investors are
          willing to pay extra for the contract, hoping it will eventually
          become profitable.
        </p>

        <p>
          Suppose an investor buys a call option with a strike price of $35, and
          it had an intrinsic value of $5 since the stock was selling at $40.
          Investors might be willing to pay an extra $25 to hold a one-year
          contract because they expect gains for the stock. That would make the
          total option premium $35 ($5 intrinsic value + $25 time value = $35
          premium).
        </p>
      </div>
    </div>
  );
}

export default Home;
