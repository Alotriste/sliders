import React from "react";

function Slid6({numberSlide, isIOS}) {
  if(numberSlide === 6 ){
    window.ym(86046335,'reachGoal','Promo_slide_6')
  }
  return (
    <div className="slid6">
      <div className="logo"></div>
      <div className="btn-slideNone_1"></div>
      <div className="slid6__title">
        <h2>
          <span>Что дает</span> членство <br /> в нашей ассоциации?
        </h2>
      </div>
      <div className="slid6__wrapper-text">
        <div className="slid6__container" data-index-number={`${numberSlide===6? "1": ''}`}>
          <div className="slid6__container-image slid6__container-image-num1"><div className="container-glare"><span className='glare'></span></div> </div>
          <div className="slid6__container-text">
              <p>Имидж</p>
            <span>Имидж серьезного <br /> игрока на рынке</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "2": ''}`}>
          <div className="slid6__container-image slid6__container-image-num2"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>База знаний</p>
            <span>Доступ к базе знаний и библиотеке документов</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "3": ''}`}>
          <div className="slid6__container-image slid6__container-image-num3"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Прокачка</p>
            <span>Быструю прокачку и набор успешных действий</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "4": ''}`}>
          <div className="slid6__container-image slid6__container-image-num4"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Инициативы</p>
            <span>Возможность предлагать инициативы</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "5": ''}`}>
          <div className="slid6__container-image slid6__container-image-num5"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Экономия</p>
            <span>Экономию на косвенных затратах</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "6": ''}`}>
          <div className="slid6__container-image slid6__container-image-num6"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Мероприятия</p>
            <span>Бесплатные мероприятия, встречи, консультации</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "7": ''}`}>
          <div className="slid6__container-image slid6__container-image-num7"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Общий чат</p>
            <span>Доступ к закрытому чату гильдии без вендоров</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "8": ''}`}>
          <div className="slid6__container-image slid6__container-image-num8"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Льготы</p>
            <span>Помощь в получении льгот</span>
          </div>
        </div>
        <div className="slid6__container" data-index-number={`${numberSlide===6? "9": ''}`}>
          <div className="slid6__container-image slid6__container-image-num9"><div className="container-glare"><span className='glare'></span></div></div>
          <div className="slid6__container-text">
          <p>Реклама</p>
            <span>Публикация Вашей компании на сайте Гильдии + логотип Гильдии на Вашем сайте</span>
          </div>
        </div>
      </div>
      <div className="slid6__cross"><svg
              width="1.5vw"
              height="2.9vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#983AE2"
              />
            </svg></div>
            
      <div className={`slid6__triagle ${!isIOS && numberSlide===6? "animationSlide6Tringl" : numberSlide===6? 'animationSlide6TringlIOS' : '' }`}></div>
      <div className="slid6__sircle-max"></div>
      <div className="slid6__sircle-min"></div>
    </div>
  );
}

export default Slid6;
