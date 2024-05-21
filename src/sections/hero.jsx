import React from "react";

export default function Hero() {
  return (
    <React.Fragment>
      {" "}
      <div className="main-banner">
        <div className="container main-banner-container">
          <div className="main-banner__content">
            <div>
              <h1 className="ui-caption main-banner__title">
                Кредитная карта MTS CASHBACK
              </h1>
              <p className="hero__text standard-text">
                Откройте кредитную карту MTS CASHBACK и получите 1500 ₽ +
                сертификат в OZON на 2000 ₽
              </p>
            </div>
            <div>
              <a className="main-banner__button ui-button" href="#form">
                Оформить карту
              </a>
            </div>
          </div>
          <div className="main-banner__img">
            <img src={require("../images/hero-pic.webp")} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
