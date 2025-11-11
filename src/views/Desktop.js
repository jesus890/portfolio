import React, { useRef, useState, useEffect } from "react";
import img5 from "../assets/5.jpeg";
import FrontPage from "../components/FrontPage";
import Phrase from "../components/Phrase";
import OurServices from "../components/OurServices";
import Competitives from "../components/Competitives";
import Benefits from "../components/Benefits";
import Clients from "../components/Clients";
import Form from "../components/Form";

function Desktop({isMobile}) {
     
  return (
    <div className="w-full h-screen overflow-y-auto">

      {/* Portada */}
      <div id="frontpage">
        <FrontPage isMobile={isMobile}/>
      </div>

      {/* MISION VISION Y LEMA */}
      <div id="phrase">
        <Phrase isMobile={isMobile}/>
      </div>

      {/* NUESTROS SERVICIOS */}
      <div id="ourservices">
        <OurServices isMobile={isMobile}/>
      </div>

      {/* DIFERENCIALES COMPETIVOS */}
      <div id="competitives">
        <Competitives isMobile={isMobile}/>
      </div>

      <img className="w-full h-auto mx-auto shadow-sm" src={img5} alt="logo" />

      {/* BENEFICIOS */}
      <div id="benefits">
        <Benefits isMobile={isMobile}/>
      </div>

      <div className="h-[70px] bg-[#5e7076] w-full"></div>

      {/* CLIENTES Y ALIANZAS */}
      <div id="clients">
        <Clients isMobile={isMobile}/>
      </div>

      {/* FORMULARIO */}
      <div id="form">
        <Form isMobile={isMobile}/>
      </div>

      <div className="h-[40px] bg-[#5e7076] w-full items-center justify-center p-7">
        <p className="text-blanco text-center mt-[-10px]">
          @2025 SmartMineCode S.A. de C.V. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

export default Desktop;
