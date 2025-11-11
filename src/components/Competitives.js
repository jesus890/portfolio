import * as React from "react";
import competitive1 from "../assets/competitivos1.svg";
import competitive2 from "../assets/competitivos2.svg";
import competitive3 from "../assets/competitivos3.svg";
import competitive4 from "../assets/competitivos4.svg";
import competitive5 from "../assets/competitivos5.svg";
import Competitive from "./Competitive";

function Competitives({ isMobile }) {
  return !isMobile ? (
    <div className="h-[full] bg-blanco w-full  items-center justify-center p-10">
      <div>
        <p className="flex text-3xl font-bold justify-center mt-6">
          <span className="text-negro">Diferenciales</span>
          <span className="text-amarillo ml-2">competivos</span>
        </p>
      </div>

      <div className="grid grid-cols-5 gap-3 mt-5">
        <Competitive
          img={competitive1}
          title="Especiliación en industria minera"
        />

        <Competitive
          img={competitive2}
          title="Soluciones end-to-end: desde software hasta infraestructura"
        />

        <Competitive
          img={competitive3}
          title="Equipo con experiencia en transformación digital y minería inteligente"
        />

        <Competitive
          img={competitive4}
          title="Enfoque en seguridad, escalabilidad y eficiencia operativa"
        />

        <Competitive
          img={competitive5}
          title="Soporte cercano y personalizado"
        />
      </div>
    </div>
  ) : (
    <div className="h-[full] bg-blanco w-full  items-center justify-center p-10">
      <div>
        <p className="flex text-2xl font-bold justify-center mt-6">
          <span className="text-negro">Diferenciales</span>
          <span className="text-amarillo ml-2">competivos</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5 ">
        <Competitive
          img={competitive1}
          title="Especiliación en industria minera"
        />

        <Competitive
          img={competitive2}
          title="Soluciones end-to-end: desde software hasta infraestructura"
        />

        <Competitive
          img={competitive3}
          title="Equipo con experiencia en transformación digital y minería inteligente"
        />

        <Competitive
          img={competitive4}
          title="Enfoque en seguridad, escalabilidad y eficiencia operativa"
        />

        <Competitive
          img={competitive5}
          title="Soporte cercano y personalizado"
        />
      </div>
    </div>
  );
}

export default Competitives;
