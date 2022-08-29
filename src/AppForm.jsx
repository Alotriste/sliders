import React, { useRef, useEffect } from "react";
// import { isMobile } from "react-device-detect";
import "./App.css";

function AppForm() {
  const form = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    const formBitrix = form.current;

    script.src = "./formB24.js";
    script.setAttribute("data-b24-form", "inline/26/77lpu2");
    script.setAttribute("data-skip-moving", "true");
    script.async = true;

    formBitrix.appendChild(script);

    return () => {
      formBitrix.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="app__form__b24">
        <div ref={form}></div>
      </div>
    </div>
  );
}

export default AppForm;
