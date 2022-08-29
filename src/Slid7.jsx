import React from "react";

function Slid7({ numberSlide }) {
  if(numberSlide === 7 ){
    window.ym(86046335,'reachGoal','Promo_slide_7')
  }
  return (
    <div className="slid7">
      
      <div className="slid7-back"></div>
      <div className="btn-slideNone_1"></div>
      <div className="slid4__wrapper-duo-cross">
        <div className="slid4__cross1">
          <svg
            width="4.8vh"
            height="4.8vh"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3755 0V18.2857H0V29.7143H18.3755V48H29.8602V29.7143H48.2357V18.2857H29.8602V0H18.3755Z"
              fill="#6E28C6"
            />
          </svg>
        </div>
        <div className="slid4__cross2">
          <svg
            width="4.8vh"
            height="4.8vh"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3755 0V18.2857H0V29.7143H18.3755V48H29.8602V29.7143H48.2357V18.2857H29.8602V0H18.3755Z"
              fill="#D15AF4"
            />
          </svg>
        </div>
      </div>
      <div className="slid7__title">
        <h2>
          Что <br /> получают участники?
        </h2>
      </div>
      <div className="slid7__wrapper-grid">
        <div className="slid7__container colum1">
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "1": ''}`}>
            Участие в централизованных группах по работе с вендорами
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "2": ''}`}>
            Участие в профильных мероприятиях
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "3": ''}`}>
            Доступ к исследованиям рынка, проводимым Гильдией
          </div>
        </div>
        <div className="slid7__container colum2">
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "4": ''}`}>
            Помощь в получении статуса ИТ-компании и доступа к льготам
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "5": ''}`}>
            Обучение сотрудников в «Академии интеграторов» Гильдии
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "6": ''}`}>
            Доступ к документам, разработанным с учетом интересов интеграторов и
            специфики отрасли:
            <ul>
              <li>
                Первичные документы (договора, доп. соглашения, акты и т. д.)
              </li>
              <li>Кадровые документы - Регламенты и процессы</li>
              <li>Адаптация документов и разработка под задачи интегратора</li>
            </ul>
          </div>
        </div>
        <div className="slid7__container colum3">
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "7": ''}`}>
            Юридическое сопровождение от лучших экспертов в таких вопросах, как:
            <ul>
              <li>Сопровождение в случае разногласий с клиентами</li>
              <li>
                Сопровождение при решении споров по авторскому праву и
                интеллектуальной собственности
              </li>
              <li>Экспертная оценка выполненных работ</li>
            </ul>
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "8": ''}`}>
            Рейтинг интеграторов и сертификация
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "9": ''}`}>
            Публикация своих мероприятий на площадке Гильдии
          </div>
        </div>
        <div className="slid7__container colum4">
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "10": ''}`}>
            Профессиональное бухгалтерское сопровождение
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "11": ''}`}>
            Консультации по проблемам в бизнесе
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "12": ''}`}>
            Участие в мастер-маинд группах, организованных Гильдией
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "13": ''}`}>
            Участие в социально значимых проектах Гильдии, способствующих
            формированию позитивного имиджа компаний
          </div>
          <div className="slid7__container-text" data-index-number={`${numberSlide===7? "14": ''}`}>Совместные закупки</div>
        </div>
      </div>
    </div>
  );
}

export default Slid7;
