import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      {" "}
      <footer className="footer">
        <div className="container">
          <div>
            <p className="rules__header">
              Правила конкурса «Оформите кредитную карту MTS CASHBACK от МТС
              Банка и получите в подарок сертификат Ozon номиналом 2000 рублей
            </p>
          </div>

          <div className="rules__header-text">
            Конкурс «Оформите кредитную карту MTS CASHBACK от МТС Банка и
            получите в подарок сертификат в Ozon номиналом 2000 рублей»
            действует с 04.06.2024 по 30.06.2024. Организатор акции ООО
            "РАФИНАД". Участники: физ. лица (18+), граждане и резиденты РФ, у
            которых нет кредитных карт MTS CASHBACK от МТС Банка, а также заявок
            на них в течение 90 дней на момент оформления кредитной карты MTS
            CASHBACK; Сертификат 2000 руб. на Озон отправляет партнёр ООО
            "РАФИНАД" в течение 60 дней, при условии, что вы оставили номер
            телефона на лендинге https://rafinad-mts-kk.ru/, оформили одну
            кредитную карту MTS CASHBACK от МТС Банка и совершили по ней перву
            покупку от 500 руб. в течение 30 дней. ПАО «МТС-Банк» Лицензия Банка
            России №2268 от 17.12.2014 г. Информация актуальна на 22.05.2024.
            Реклама. По всем вопросам касательно отправки сертификата Ozon
            обращайтесь на
            <a href="mailto:support@rafinad.io">support@rafinad.io</a>.
          </div>
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://rafinad.io/download-file/pravila-akcii-mts"
          >
            <p className="rules__header-bottom">
              ПОРЯДОК проведения стимулирующей акции «Приведи друга»
            </p>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
