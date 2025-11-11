import * as React from "react";
import benefit1 from "../assets/beneficios1.svg";
import benefit2 from "../assets/beneficios2.svg";
import benefit3 from "../assets/beneficios3.svg";
import benefit4 from "../assets/beneficios4.svg";
import Benefit from "./Benefit";

function Benefits({ isMobile }) {
  return !isMobile ? (
    <div className="h-[full] bg-blanco w-full items-center justify-center p-10">
      <div>
        <p className="justify-center text-center mt-6">
          <span className="text-4xl text-negro font-bold">Beneficios</span>
          <span className="text-2xl text-negro font-thin block">
            Impacto real en tus operaciones
          </span>
        </p>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <Benefit
            img={benefit1}
            title="Optimización Operativa"
            subtitle="Reducción de errores humanos en reportes y análisis."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit2}
            title="Mayor Productividad"
            subtitle="Decisiones rápidas basadas en datos en tiempos real."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit3}
            title="Seguridad Tecnológica"
            subtitle="Infraestructura robusta con respaldo 24/7."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit4}
            title="Transformación Digital"
            subtitle="Integración entre campo, laboratorio y oficina."
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[full] bg-blanco w-full items-center justify-center p-5">
      <div>
        <p className="justify-center text-center mt-6">
          <span className="text-2xl text-negro font-bold">Beneficios</span>
          <span className="text-xl text-negro font-thin block">
            Impacto real en tus operaciones
          </span>
        </p>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <Benefit
            img={benefit1}
            title="Optimización Operativa"
            subtitle="Reducción de errores humanos en reportes y análisis."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit2}
            title="Mayor Productividad"
            subtitle="Decisiones rápidas basadas en datos en tiempos real."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit3}
            title="Seguridad Tecnológica"
            subtitle="Infraestructura robusta con respaldo 24/7."
            isMobile={isMobile}
          />

          <Benefit
            img={benefit4}
            title="Transformación Digital"
            subtitle="Integración entre campo, laboratorio y oficina."
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

export default Benefits;
