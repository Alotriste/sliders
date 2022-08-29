import React from "react";

function Slid8({ numberSlide, isIOS }) {
  if(numberSlide === 8 ){
    window.ym(86046335,'reachGoal','Promo_slide_8')
  }
  return (
    <div className="slid8">
      <div className={`slid8__title ${numberSlide === 8 ? "animationOp" : ""}`}>
        <p>
          Инвестиции
          <br /> на вступление <br /> <span className="span1">в Гильдию:</span>
        </p>
      </div>
      <div className="slid8__back"></div>

      <div
        className={`slid8__top ${
          !isIOS && numberSlide === 8
            ? "slid8__animation"
            : numberSlide === 8
            ? "slid8__animationIOS"
            : ""
        }`}
      ></div>
      <div className="slid8__container-price-in">
        <div className="slid8__container-price-in-text">
          Вступительный взнос
        </div>
        <div className="slid8__container-price-in-p">50 000 ₽</div>
      </div>

      <div className="slid8__wrapper-price">
        <div className="slid8__container-price">
          <div className="slid8__container-price-text">
            <h3>Начальный</h3> <p>Первый уровень</p> <span>Членские взносы:</span> 
          </div>
          <div className="slid8__container-price-p">4 167 <span>руб./мес.</span> </div>
        </div>
        <div className="slid8__container-price">
          <div className="slid8__container-price-text">
           <h3>Средний</h3> <p>Второй уровень</p> <span>Членские взносы:</span>   
          </div>
          <div className="slid8__container-price-p">8 333 <span>руб./мес.</span></div>
        </div>
        <div className="slid8__container-price">
          <div className="slid8__container-price-text">
          <h3>Расширенный</h3> <p>Максимальный</p> <span>Членские взносы:</span>   
          </div>
          <div className="slid8__container-price-p">16 667 <span>руб./мес.</span></div>
        </div>
      </div>
    </div>
  );
}

export default Slid8;
