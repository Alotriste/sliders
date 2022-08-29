import React, { useRef, useState } from "react";
import Carousel from "nuka-carousel";
import "./App.css";
import Slid1 from "./Slid1";
import Slid2 from "./Slid2";
import Slid3 from "./Slid3";
import Slid4 from "./Slid4";
import Slid5 from "./Slid5";
import Slid6 from "./Slid6";
import Slid7 from "./Slid7";
import Slid8 from "./Slid8";
import Slid9 from "./Slid9";

function AppGorizontal({ isAndroid, isMobile, isIOS }) {
  const [numberSlide, setNumberSlide] = useState(1);
  console.log(numberSlide);
  // const [btnCheck, setBtnCheck] = useState(false);

  const numberSlideDown = () => {
    if (numberSlide !== 1) {
      setNumberSlide((numberSlide) => (numberSlide -= 1));
    } else {
      setNumberSlide((numberSlide) => (numberSlide = 1));
    }
  };
  const numberSlideUp = () => {
    if (numberSlide !== 9) {
      setNumberSlide((numberSlide) => (numberSlide += 1));
    } else {
      setNumberSlide((numberSlide) => (numberSlide = 9));
    }
  };

  const arrowNext = useRef(null);

  function displayArrowNextOpen(sec) {
    setTimeout(
      () => arrowNext.current.classList.remove("btn-slideNone"),
      sec * 1000
    );
  }

  switch (numberSlide) {
    case 3:
      displayArrowNextOpen(5);
      break;
    case 4:
      displayArrowNextOpen(5);
      break;
    case 6:
      displayArrowNextOpen(10);
      break;
    case 7:
      displayArrowNextOpen(15);
      break;
      // no default
  }

  // useEffect(() => {
  //   const btn = document.querySelectorAll("btn-slide");
  //   // const formBitrix = arrowNext.current;

  //   if(numberSlide === 3){
  //     btn.setAttribute("data-display-nune-next-slide3", "3");
  //   }

  //   // return () => {
  //   //   formBitrix.removeChild(script);
  //   // };
  // }, [numberSlide]);

  // useEffect(() => {
  //   setTimeout(()=>{setBtnCheck((btnCheck) => (btnCheck = !btnCheck))},3000);
  //   console.log(btnCheck);

  //   return setBtnCheck((btnCheck) => (btnCheck = false));
  // }, [numberSlide]);
  return (
    <div className="App">
      <Carousel
        dragging={false}
        swiping={false}
        //disableEdgeSwiping ={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            display: "none",
          },
        }}
        renderCenterLeftControls={null}
        renderBottomLeftControls={({ previousSlide }) => (
          <div onClick={numberSlideDown}>
            <button
              className={`btn-slide ${
                numberSlide === 1 ? "btn-slideNone" : ""
              }`}
              onClick={previousSlide}
            >
              <div className="arrow-btn-previus"></div>
            </button>
          </div>
        )}
        renderCenterRightControls={null}
        renderBottomRightControls={({ nextSlide }) => (
          <div onClick={numberSlideUp}>
            <button
              ref={arrowNext}
              className={`btn-slide ${numberSlide === 9 ? "btn-slideNone" : ""}
              ${numberSlide === 3 ? "btn-slideNone" : ""}
              ${numberSlide === 4 ? "btn-slideNone" : ""}
              ${numberSlide === 6 ? "btn-slideNone" : ""}
              ${numberSlide === 7 ? "btn-slideNone" : ""}
              `}
              onClick={nextSlide}
              // style={ {display: `block`}}
              data-display-nune-next-slide1={`${numberSlide === 1 ? "1" : ""}`}
              data-display-nune-next-slide3={`${numberSlide === 3 ? "3" : ""}`}
              data-display-nune-next-slide4={`${numberSlide === 4 ? "4" : ""}`}
              data-display-nune-next-slide6={`${numberSlide === 6 ? "6" : ""}`}
              data-display-nune-next-slide7={`${numberSlide === 7 ? "7" : ""}`}
            >
              <div
                className="arrow-btn-next"
                data-index-slide1={`${numberSlide === 1 ? "1" : ""}`}
                data-index-slide3={`${numberSlide === 3 ? "3" : ""}`}
                data-index-slide4={`${numberSlide === 4 ? "4" : ""}`}
                data-index-slide6={`${numberSlide === 6 ? "6" : ""}`}
                data-index-slide7={`${numberSlide === 7 ? "7" : ""}`}
              >
                {" "}
              </div>
            </button>
          </div>
        )}
      >
        <Slid1 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid2 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid3 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid4 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid5 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid6 numberSlide={numberSlide} isAndroid={isAndroid} isIOS={isIOS} />
        <Slid7 numberSlide={numberSlide} isAndroid={isAndroid} />
        <Slid8 numberSlide={numberSlide} isAndroid={isAndroid} isIOS={isIOS} />
        <Slid9
          numberSlide={numberSlide}
          isAndroid={isAndroid}
          isMobile={isMobile}
        />
      </Carousel>
    </div>
  );
}

export default AppGorizontal;
