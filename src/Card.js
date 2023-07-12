import React from "react";

function Card() {
  return (
    <div className="row">
      <div className="col-md-4 d-flex justify-content-between">
        <div className="card">
          <img
            className="card-img-top"
            src="https://shorturl.at/oyLNX"
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">Black Scholes</h5>
            <p className="card-text" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-between">
        <div className="card">
          <img
            className="card-img-top"
            src="https://shorturl.at/jpAW1"
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">Binomial Tree</h5>
            <p className="card-text" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-between">
        <div className="card">
          <img
            className="card-img-top"
            src="https://shorturl.at/oyLNX"
            alt="Card"
          />
          <div className="card-body">
            <h5 className="card-title">Monte Carlo</h5>
            <p className="card-text" style={{ color: "white" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
