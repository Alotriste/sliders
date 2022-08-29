import React, { useState, useEffect} from "react";
import {
  
  isMobile,
  isAndroid,
  isIOS
} from "react-device-detect";
import AppGorizontal from "./AppGorizontal";

import AppVertical from "./AppVertical";



function App() {
  

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth( (width)=> (width = window.innerWidth));
  }
  let isMobileVertically = width <= 481;
  console.log(isMobileVertically);
  

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  
  


  

  

  return (
    <div>
{isMobileVertically ? <AppVertical /> : <AppGorizontal  isIOS={isIOS} isAndroid={isAndroid} isMobile={isMobile} />}
    </div>
    
  );
}

export default App;
// <AppMainDesctop/>

// className={`${numberSlide===4? "opacitySlid4": ''}`}
