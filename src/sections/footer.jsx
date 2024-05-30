import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      {" "}
      <footer className="footer">
        <div className="container">
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://rafinad.io/download-file/pravila-provedeniya-konkursa"
          >
            <p className="rules__header">Правила акции</p>
          </a>
          <div className="rules__header-text">
            Акция действует с 24.05.2024 по 30.06.2024. Участники: физ. лица
            (18+), граждане и резиденты РФ, у которых нет кредитных карт ПАО
            «МТС-Банк»; кредитная карта ПАО «МТС-Банк» оформлена на rafinad.io;
            сертификат 2000 руб. на Озон отправляет партнёр в течение 60 дней
            после выполнения участником условий акции.ПАО «МТС-Банк» Лицензия
            Банка России №2268 от 17.12.2014 г. Информация актуальна на
            22.05.2024. Реклама. По всем вопросам касательно отправки
            сертификата Ozon обращайтесь на{" "}
            <a href="mailto:support@rafinad.io">support@rafinad.io</a>.
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
