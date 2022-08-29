import React from "react";
import "./App.css";

function Slid2({ numberSlide, isAndroid }) {
  if (numberSlide === 2) {
    window.ym(86046335, "reachGoal", "Promo_slide_2");
  }
  return (
    <div className="slid2" data-in-android={`${isAndroid && "y"}`}>
      {!isAndroid && <div className="logo"></div>}

      <div className={`slid2__title ${numberSlide === 2 ? "animationOp" : ""}`} data-in-android={`${isAndroid && "y"}`}>
        <h2>
          Сложности <span>развития</span>
        </h2>
        <div className="slid2__description" data-in-android={`${isAndroid && "y"}`}>
          <p>
            На всех этапах самостоятельного развития интеграторы постоянно
            сталкиваются со сложностями
          </p>
        </div>
      </div>

      <div className="slid2__sircle"></div>
      <div
        className={`slid2__sircle-back ${
          numberSlide === 2 ? "animationHeightSlide2" : ""
        }`}
      ></div>
      <div
        className={`slid2__people ${isAndroid ? "people-android" : ""}`}
      ></div>

      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number1" : "number1__android"
        } ${numberSlide === 2 ? "animationOp" : ""} `}
      >
        <p>С чего начать?</p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number2" : "number2__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_2" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_2__android"
        } `}
      >
        <p>Как упаковать свой продукт?</p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number3" : "number3__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_3" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_3__android"
        } `}
      >
        <p>Что делать, в случае претензий?</p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number4" : "number4__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_4" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_4__android"
        } `}
      >
        <p>Как найти клиентов?</p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number5" : "number5__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_5" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_5__android"
        } `}
      >
        <p>Где найти сотрудников, как их обучать?</p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number6" : "number6__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_6" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_6__android"
        } `}
      >
        <p>
          Какие документы подписать с клиентом, чтобы сделка была безопасной?
        </p>
      </div>
      <div
        className={`slid2__message-wrapper ${
          !isAndroid ? "number7" : "number7__android"
        } ${!isAndroid && numberSlide === 2 ? "moveSlide2_7" : ""} ${
          numberSlide === 2 && isAndroid && "moveSlide2_7__android"
        }`}
      >
        <p>
          Как вести бухгалтерию и сотни других задач, решение которых занимает
          огромное кол-во ресурсов и не дает заниматься основными задачами –
          помогать клиентам и зарабатывать?
        </p>
      </div>
    </div>
  );
}

export default Slid2;
