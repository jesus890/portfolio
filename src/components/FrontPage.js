import * as React from "react";
import Button from "@mui/material/Button";
import { MainButton } from "../SXStyle";

function FrontPage({ isMobile }) {
  
  const download = () => {
    const link = document.createElement("a");
      link.href = "/media/Brochure SmartMineCode.pdf"; // URL del documento
      link.download = "Brochure SmartMineCode.pdf"; // Nombre con el que se guardará
      //link.target = "_blank"; // Opcional: abre en otra pestaña
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  return !isMobile ? (
    <>
      <div
        className="h-[100%] flex items-center justify-center"
        style={{
          backgroundImage: "url('fondo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="text-6xl font-bold text-blanco text-center">
            <span
              style={{
                textShadow:
                  "0 0 3px #869294, 0 0 6px #484b4c, 0 0 12px #5b6564",
              }}
            >
              Transformamos datos en decisiones,
            </span>
            <br />
            <span> tecnología en </span>
            <span
              className="text-amarillo_suave"
              style={{
                textShadow:
                  "0 0 3px #869294, 0 0 6px #484b4c, 0 0 12px #5b6564",
              }}
            >
              resultados
            </span>
            <span>.</span>
          </p>

          <div className="mt-5 flex justify-center">
            <Button
              onClick={() => download()}
              role={undefined}
              variant="contained"
              sx={MainButton}
            >
              <span className="text-blanco font-bold">
                Descargar Brochure PDF
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* CUSTOM MINING SOFTWARE */}
      <div className="h-[55px] bg-[#c3a536] text-blanco text-2xl relative">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mt-1">CUSTOM MINING SOFTWARE </span>
          <span className="mt-2 ml-3"> ● CUSTOM MINING SOFTWARE </span>
          <span className="mt-2 ml-3"> ● CUSTOM MINING SOFTWARE </span>
          <span className="mt-2 ml-3"> ● CUSTOM MINING SOFTWARE </span>
          <span className="mt-2 ml-3"> ● CUSTOM MINING SOFTWARE </span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div
        className="h-[60%] w-full flex items-center justify-center p-5"
        style={{
          backgroundImage: "url('fondo.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="text-2xl font-bold text-blanco text-center">
            <span
              style={{
                textShadow:
                  "0 0 3px #869294, 0 0 6px #484b4c, 0 0 12px #5b6564",
              }}
            >
              Transformamos datos en decisiones,
            </span>
            <br />
            <span> tecnología en </span>
            <span
              className="text-amarillo_suave"
              style={{
                textShadow:
                  "0 0 3px #869294, 0 0 6px #484b4c, 0 0 12px #5b6564",
              }}
            >
              resultados
            </span>
            <span>.</span>
          </p>

          <div className="mt-5 flex justify-center">
            <Button
              onClick={() => download()}
              role={undefined}
              variant="contained"
              sx={MainButton}
            >
              <span className="text-blanco font-bold">
                Descargar Brochure PDF
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* CUSTOM MINING SOFTWARE */}
      <div className="h-[55px] bg-[#c3a536] text-blanco text-xl relative w-full overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mt-2">CUSTOM MINING SOFTWARE </span>
          <span className="mt-2 ml-3"> ● CUSTOM MINING SOFTWARE </span>
          
          
        </div>
      </div>
    </>
  );
}

export default FrontPage;
