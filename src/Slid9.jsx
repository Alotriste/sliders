import React from "react";
import { Link } from "react-router-dom";

function Slid9({numberSlide}) {
  if(numberSlide === 9 ){
    window.ym(86046335,'reachGoal','Promo_slide_9')
  }
  return (
    <div className="slid9">
      <div className="logo_last"></div>
      <div className="slid9__background">
        <div className="slid9__background__content">
          <div className="slid9__background__content__description">
            <p>Присоединяйся к успеху нашей команды!</p>
          </div>
          <div className="slid9__btn">
            <div>
              <a href="https://gildin.ru/registrationgildin">
                <button className="slid9__btn__level">
                  <span>Уровни членства</span>
                </button>
              </a>
            </div>
            <div>
              <Link to="/appform">
                <button className="slid9__btn__form">
                  <span>Заявка кандидата </span><span class="flare"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="slid9__i"></div>
      <div className="slid9__downloader_pdf"> <div className="slid9__downloader_pdf__arrow"></div><p><a href="presentation.pdf" download>Скачать PDF презентации</a></p></div>
      
    </div>
  );
}

export default Slid9;
