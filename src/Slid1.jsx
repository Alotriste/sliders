import React from "react";
import "./App.css";


function Slid1({ numberSlide, isAndroid }) {

  if(numberSlide === 1 ){
    window.ym(86046335,'reachGoal','Promo_slide_1')
  }
  return (
    <div className="slid1">
      <div className="logo"></div>
      <div className="slid1__sircl1"></div>
      <div className="slid1__line-image"></div>
      <div className="slid1__sircl2">
        <div className="slid1__cross"></div>
      </div>
      <div
        className={`slid1__triangle ${
          numberSlide === 1 ? "slid1__triangle_animation" : ""
        }`}
      ></div>
      <div className="slid1__group-cross">
        <div className="slid1__cross1"></div>
        <div className="slid1__cross2"></div>
        <div className="slid1__cross3"></div>
        <div className="slid1__cross4"></div>
      </div>
      <div className={`description_btn ${numberSlide === 1 ? "description_btn_animation": ""} ${isAndroid? "top-7": ""}`}>
        <p className="description_btn_p">далее</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12vw"
          height="25vh"
          viewBox="0 -112.5 296 296"
          fill="none"
        >
          <path
            fill="#FFFFFF"
            d="M-8.59302e-06 71C13.102 44.3623 83.0496 8.91537 132.922 2.62301C186.809 -4.29859 217.873 1.57428 281.27 31.1484C280.425 26.9535 279.368 23.5976 278.945 20.4514C278.311 16.8857 277.677 13.1103 277.889 9.54461C277.889 8.49589 279.791 6.60818 281.059 6.39843C282.327 6.18869 284.44 7.6569 284.862 8.70563C288.666 18.7734 292.047 28.8412 295.64 39.1187C296.696 42.4746 295.428 44.9916 291.836 46.0403C278.1 49.3962 264.364 52.9619 250.417 56.1081C247.247 56.7373 243.443 55.8983 239.217 55.8983C242.598 46.8793 250.206 47.928 255.7 45.6208C261.406 43.1039 267.534 41.6357 274.93 39.1187C257.39 27.373 239.639 20.0319 220.832 15.4175C151.941 -1.78164 88.544 12.481 30.0078 50.6547C22.4002 55.6886 15.4266 61.5615 8.03027 66.8051C5.70573 67.8538 3.59247 68.9026 -8.59302e-06 71Z"
            
          />
        </svg>
      </div>
      <div className="slid1__title">
        <h1>
          Гильдия <br /> интеграторов <br /> <span>России</span>
        </h1>
      </div>
      <div className="slid1__description">
        <p>Сообщество, объединяющее ведущих интеграторов России</p>
      </div>
    </div>
  );
}

export default Slid1;
