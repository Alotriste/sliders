import React from "react";

function Slid4({numberSlide}) {
  if(numberSlide === 4 ){
    window.ym(86046335,'reachGoal','Promo_slide_4')
  }
  return (
    <div className="slid4">
      
      <div className="logo"></div>
      <div className="btn-slideNone_1"></div>
      <div className="slid4__rectangle"></div>
      <div className="slid4__title">
        <p></p>
        <span></span>
      </div>
      <div className="slid4__wrapper-duo-cross">
        <div className="slid4__cross1">
          <svg
            width="2.5vw"
            height="5vh"
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
            width="2.5vw"
            height="5vh"
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
      <div className="slid4__wrapper-text">
          <div className="slid4__container" data-index-number="1">
              <div className={`slid4__container-number`} data-index-number={`${numberSlide===4? "1": ''}`}>01</div>
              <div className="slid4__container-text" data-index-number={`${numberSlide===4? "1": ''}`}>Формирование устойчивого рынка системных интеграторов</div>
          </div>
          <div className="slid4__container" data-index-number="2">
              <div className={`slid4__container-number`} data-index-number={`${numberSlide===4? "2": ''}`} >02</div>
              <div className="slid4__container-text" data-index-number={`${numberSlide===4? "2": ''}`}>Внедрение стандартов в отрасли</div>
          </div>
          <div className="slid4__container" data-index-number="3">
              <div className={`slid4__container-number`} data-index-number={`${numberSlide===4? "3": ''}`} >03</div>
              <div className="slid4__container-text" data-index-number={`${numberSlide===4? "3": ''}`}>Защита интересов участников рынка, в т. ч. в нормативно-правовом поле</div>
          </div>
          <div className="slid4__container" data-index-number="4">
              <div className={`slid4__container-number`} data-index-number={`${numberSlide===4? "4": ''}`} >04</div>
              <div className="slid4__container-text" data-index-number={`${numberSlide===4? "4": ''}`}>Повышение уровня профессионального развития кадров в области системной интеграции</div>
          </div>
          <div className="slid4__container" data-index-number="5">
              <div className={`slid4__container-number`} data-index-number={`${numberSlide===4? "5": ''}`} >05</div>
              <div className="slid4__container-text" data-index-number={`${numberSlide===4? "5": ''}`}>Построение единой площадки коммуникации между всеми участниками рынка</div>
          </div>
      </div>
    </div>
  );
}

export default Slid4;
