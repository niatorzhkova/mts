import React from "react";

export default function Benefits({}) {
  return (
    <React.Fragment>
      {" "}
      <div className="benefits__section">
        <div className="container">
          <div className="main-benefits">
            <div className="benefit-item">
              <p className="benefit-item__title">Кешбэк 1500 ₽</p>
              <p className="u-collapse-all">
                За покупки по карте от 3000 ₽ в течение 30 дней с момента
                выпуска карты
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">Бесплатно всегда</p>
              <p className="u-collapse-all">
                Выпуск, доставка и обслуживание карты — 0 ₽
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">До 111 дней</p>
              <p className="u-collapse-all">Льготный период на все покупки</p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">До 1 000 000 ₽</p>
              <p className="u-collapse-all">Кредитный лимит по карте</p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">До 20 000 ₽</p>
              <p className="u-collapse-all">
                Советуйте кредитку МТС Банка друзьям и получайте по 1500 ₽
                за каждого
              </p>
            </div>
            <div className="benefit-item">
              <p className="benefit-item__title">До 13 месяцев</p>
              <p className="u-collapse-all">
                За первую покупку в МТС, сделанную в течение 30 дней с даты
                получения карты
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
