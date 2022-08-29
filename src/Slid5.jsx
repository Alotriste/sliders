import React from "react";

function Slid5({numberSlide}) {
  if(numberSlide === 5 ){
    window.ym(86046335,'reachGoal','Promo_slide_5')
  }
  return (
    <div className="slid5">
      <div className="logo"></div>
      
      <div className="slid5__title">
        <h2>
          Почему <br /> <span>именно наша </span>ассоциация?
        </h2>
      </div>
      <div className={`slid5__container-image1 ${numberSlide===5? "moveSlide5_1": ''}`}></div>
      <div className={`slid5__container-image2 ${numberSlide===5? "moveSlide5_2": ''}`}></div>
      <div className={`slid5__container-image3 ${numberSlide===5? "moveSlide5_3": ''}`}></div>
      <div className="slid5__wrapper-text">

        <div className="slid5__container">
        
          <div className={`slid5__container-text ${numberSlide===5? "movePaddingSlide5_1": ''}`}><span>Каждый интегратор поодиночке слаб</span></div>
        </div>
        <div className="slid5__container">
          
          <div className={`slid5__container-text ${numberSlide===5? "movePaddingSlide5_2": ''}`}><span>Сфера деятельности — новая, зеленая, поэтому рынок абсолютно не устаканенный, каждый работает “кто во что горазд”</span></div>
        </div>
        <div className="slid5__container">
          
          <div className={`slid5__container-text ${numberSlide===5? "movePaddingSlide5_3": ''}`}><span>Не эффективна коммуникация вендора/любого другого значимого игрока рынка с каждым интегратором по отдельности</span></div>
        </div>
      </div>
      <div className="slid5__image-back"></div>
    </div>
  );
}

export default Slid5;
