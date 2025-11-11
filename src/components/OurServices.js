import * as React from "react";
import img2 from "../assets/2.jpeg";
import Service from "./Service";
import service1 from "../assets/servicios1.svg";
import service2 from "../assets/servicios2.svg";
import service3 from "../assets/servicios3.svg";
import service4 from "../assets/servicios4.svg";
import service5 from "../assets/servicios5.svg";

function OurServices({ isMobile }) {
  const services1 = [
    "Plataformas personalizadas para gestión y análisis de datos.",
    "Dashboards operativos y de producción.",
    "Integración de sistemas y automatizacionn de procesos.",
  ];

  const services2 = [
    "Venta de equipos de cómputo y servidores.",
    "Soluciones de red y conectividad.",
    "Sistemas de Alimeentación Ininterrumpida (UPS).",
  ];

  const services3 = [
    "Sistemas de videovigilencia CCTV de alta confiabilidad.",
    "Integración con plataformas digitales de control.",
  ];

  const services4 = [
    "Consultoría tecnológica.",
    "Soporte técnco integral.",
    "Implementación de soluciones de continuidad operativa.",
  ];

  const services5 = [
    "Análisis de datos aplicado a minería.",
    "Excel avanzado para gestión operativa.",
    "Power BI para visualización y reportes.",
    "Talleres personalizados según las necesidades de tu empresa.",
  ];

  return !isMobile ? (
    <div className="h-[full] bg-negro w-full flex items-center justify-center p-10">
      <div className="grid grid-cols-[5%_30%_65%] gap-2 mt-4">
        <div></div>

        {/* FOTO */}
        <img
          className="w-full h-full mx-auto shadow-sm"
          src={img2}
          alt="logo"
        />

        <div>
          <p className="flex text-3xl font-bold justify-center mt-6">
            <span className="text-white">Nuestros</span>
            <span className="text-amarillo ml-2">servicios</span>
          </p>

          <Service
            img={service1}
            title="Desarrollo de Software Minero"
            services={services1}
          />

          <Service
            img={service2}
            title="Infraestructura Tecnológica"
            services={services2}
          />

          <Service
            img={service3}
            title="Seguridad y Monitoreo"
            services={services3}
          />

          <Service
            img={service4}
            title="Seguridad de TI Especializados"
            services={services4}
          />

          <Service
            img={service5}
            title="Capacitación y Cursos"
            services={services5}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="h-[full] bg-negro w-full flex items-center justify-center p-10">
      <div className="mt-4">
        <p className="flex text-2xl font-bold justify-center">
          <span className="text-white">Nuestros</span>
          <span className="text-amarillo ml-2">servicios</span>
        </p>

        {/* FOTO */}
        <img
          className="w-full h-[auto] mx-auto shadow-sm mt-3"
          src={img2}
          alt="logo"
        />

        <div>
          <Service
            img={service1}
            title="Desarrollo de Software Minero"
            services={services1}
            isMobile={isMobile}
          />

          <Service
            img={service2}
            title="Infraestructura Tecnológica"
            services={services2}
            isMobile={isMobile}
          />

          <Service
            img={service3}
            title="Seguridad y Monitoreo"
            services={services3}
            isMobile={isMobile}
          />

          <Service
            img={service4}
            title="Seguridad de TI Especializados"
            services={services4}
            isMobile={isMobile}
          />

          <Service
            img={service5}
            title="Capacitación y Cursos"
            services={services5}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
