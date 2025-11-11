import * as React from "react";
import img6 from "../assets/6.jpeg";
import mision from "../assets/mision.svg";
import vision from "../assets/vision.svg";

function Phrase({ isMobile }) {
  return !isMobile ? (
    <div className="h-[full] bg-blanco w-full flex items-center justify-center p-10">
      <div className="text-center">
        {/* QUIENES SOMOS */}
        <div>
          <p className="flex text-2xl font-bold justify-center mt-6">
            <span className="text-negro">¿Quiénes</span>
            <span className="text-amarillo ml-3">somos</span>
            <span className="text-negro ml-1">?</span>
          </p>
          <p className="text-negro mt-2 text-md">
            <span className="font-bold"> SmartMineCode S.A de C.V. </span>
            <span>
              es una empresa especializada en el desarrollo de software <br />
              personalizado para la industria minera, creando soluciones
              tecnológicas innovadoras que <br />
              convierten datos operativos en inteligencia accionable <br />
            </span>
            <span className="font-thin italic">
              "De la mina al dato, del dato a la decisión."
            </span>
          </p>
        </div>

        {/* MISION - FOTO Y VISION */}
        <div className="grid grid-cols-[30%_40%_30%] gap-2 mt-4">
          {/* Nuestra mision */}
          <div>
            <img className="w-[80px] h-auto mx-auto " src={mision} alt="logo" />
            <p className="flex text-2xl font-bold justify-center mt-6">
              <span className="text-negro">Nuestra</span>
              <span className="text-amarillo ml-2">misión</span>
            </p>
            <p className="text-negro mt-2 text-md">
              Revolucionar las operaciones mineras mediante tecnología de
              vanguardia, proporcionando herramientas que optimizan procesos,
              reducen errores yy general ventajas competitivas sostenibles.
            </p>
          </div>

          {/* Foto principal */}
          <img
            className="w-[75%] h-auto mx-auto rounded-md"
            src={img6}
            alt="logo"
          />

          {/* Nuestra vision */}
          <div>
            <img className="w-[80px] h-auto mx-auto " src={vision} alt="logo" />
            <p className="flex text-2xl font-bold justify-center mt-6">
              <span className="text-negro">Nuestra</span>
              <span className="text-amarillo ml-2">visión</span>
            </p>
            <p className="text-negro mt-2 text-md">
              Construir un futuro minero digital donde cada decisión esté
              respaldada por datos precisos, análisis avanzados y tecnología
              confiable.
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[full] bg-blanco w-full p-7">
      <div className="text-center">
        {/* QUIENES SOMOS */}
        <div>
          <p className="flex text-2xl font-bold justify-center mt-6">
            <span className="text-negro">¿Quiénes</span>
            <span className="text-amarillo ml-3">somos</span>
            <span className="text-negro ml-1">?</span>
          </p>
          <p className="text-negro mt-5 text-md">
            <span className="font-bold"> SmartMineCode S.A de C.V. </span>
            <span>
              es una empresa especializada en el desarrollo de software
              personalizado para la industria minera, creando soluciones
              tecnológicas innovadoras que convierten datos operativos en
              inteligencia accionable
            </span>
            <span className="font-thin italic">
              {" "}
              <br />
              <br />
              "De la mina al dato, del dato a la decisión."
            </span>
          </p>
        </div>

        {/* Foto principal */}
        <img
          className="w-full h-auto mx-auto rounded-xl mt-4"
          src={img6}
          alt="logo"
        />

        {/* MISION - FOTO Y VISION */}
        <div className=" mt-4">
          {/* Nuestra mision */}
          <div>
            <img className="w-[80px] h-auto mx-auto " src={mision} alt="logo" />
            <p className="flex text-2xl font-bold justify-center mt-6">
              <span className="text-negro">Nuestra</span>
              <span className="text-amarillo ml-2">misión</span>
            </p>
            <p className="text-negro mt-2 text-md">
              Revolucionar las operaciones mineras mediante tecnología de
              vanguardia, proporcionando herramientas que optimizan procesos,
              reducen errores yy general ventajas competitivas sostenibles.
            </p>
          </div>

          {/* Nuestra vision */}
          <div>
            <img className="w-[80px] h-auto mx-auto " src={vision} alt="logo" />
            <p className="flex text-2xl font-bold justify-center mt-6">
              <span className="text-negro">Nuestra</span>
              <span className="text-amarillo ml-2">visión</span>
            </p>
            <p className="text-negro mt-2 text-md">
              Construir un futuro minero digital donde cada decisión esté
              respaldada por datos precisos, análisis avanzados y tecnología
              confiable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phrase;
