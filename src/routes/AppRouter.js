import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter,
} from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import MainView from "../views/MainView";

const AppRouter = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      // Verificar User Agent
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isMobileDevice = mobileKeywords.test(userAgent);

      // Verificar dimensiones de pantalla
      const isMobileWidth = window.innerWidth <= 768;

      // Verificar si es táctil
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Combinar criterios: es móvil si cumple al menos 2 de las 3 condiciones
      const criteriaCount = [
        isMobileDevice,
        isMobileWidth,
        isTouchDevice,
      ].filter(Boolean).length;
      setIsMobile(criteriaCount >= 2);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicLayout isMobile={isMobile} />}>
          <Route path="/" element={<MainView isMobile={isMobile} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
