import React from "react";
import "./App.css";


function Slid3({ numberSlide, isAndroid }) {
  if(numberSlide === 3 ){
    window.ym(86046335,'reachGoal','Promo_slide_3')
  }
  return (
    <div className="slid3">
      <div className="logo"></div>
      <div className="btn-slideNone_1" ></div>
      <div className={`slid3__title ${numberSlide === 3 ? "animationOp" : ""}`}>
        <h2>
          Есть <br />
          <span className="span1">решение</span>
        </h2>
        <div className="slid3__description" data-index-number={`${numberSlide === 3 ? "1" : ""}`}>
          <p>
            Мы очень хорошо понимаем все проблемы, так как сами <br /> прошли
            или проходим этот путь. Обмениваясь знаниями <br /> и опытом,{" "}
            <span className="span2">вместе можно расти намного быстрее!</span>
          </p>
        </div>
      </div>
      <div className={`slid3__description2 ${isAndroid ? "" : "top-60"}`} >
        <p data-index-number={`${numberSlide === 3 ? "2" : ""}`}>Мы сформируем рынок, на котором можно:</p>
      </div>
      <div className={`slid3__flex-wrapper ${isAndroid ? "" : "top-70"}`}>
        <div
          className="slid3__flex-container  slid3__container1"
          data-index-number={`${numberSlide === 3 ? "3" : ""}`}
        >
          <div className="slid3__cross1 ">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#D15AF4"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>
              построить
              <br /> прибыльный
              <br /> и экологичный бизнес
            </p>
          </div>
        </div>
        <div
          className="slid3__flex-container slid3__container2"
          data-index-number={`${numberSlide === 3 ? "4" : ""}`}
        >
          <div className="slid3__cross2">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#983AE2"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>разработать единые стандарты работы</p>
          </div>
        </div>
        <div
          className="slid3__flex-container slid3__container3 "
          data-index-number={`${numberSlide === 3 ? "5" : ""}`}
        >
          <div className="slid3__cross3">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#6E28C6"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>получить довольных клиентов</p>
          </div>
        </div>
        <div
          className="slid3__flex-container slid3__container4"
          data-index-number={`${numberSlide === 3 ? "6" : ""}`}
        >
          <div className="slid3__cross4">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#5928C6"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>
              создать по-настоящему достойную и востребованную профессию
              «Интегратор», «Бизнес-аналитик»!
            </p>
          </div>
        </div>
        <div
          className="slid3__flex-container slid3__container5"
          data-index-number={`${numberSlide === 3 ? "7" : ""}`}
        >
          <div className="slid3__cross5">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#382CC8"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>защищать интересы бизнеса и сотрудников</p>
          </div>
        </div>
        <div
          className="slid3__flex-container slid3__container6"
          data-index-number={`${numberSlide === 3 ? "8" : ""}`}
        >
          <div className="slid3__cross6">
            <svg
              width="2.6vh"
              height="2.6vh"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.90476 0V9.85635H0V16.0166H9.90476V25.8729H16.0952V16.0166H26V9.85635H16.0952V0H9.90476Z"
                fill="#0521B5"
              />
            </svg>
          </div>
          <div className="slid3__cross-description">
            <p>
              вести диалог «на равных» с вендорами
              <br /> и государством
            </p>
          </div>
        </div>
      </div>
      <div className="slid3__sircle1"></div>
      <div className="slid3__sircle2"></div>
      <div className="slid3__line"></div>
      <div className="slid3__triangle"></div>
      <div
        className={`slid3__hand  ${numberSlide === 3 ? "moveHand" : ""}`}
      ></div>
    </div>
  );
}

export default Slid3;
