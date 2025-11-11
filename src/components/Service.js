import * as React from "react";

function Service({ img, title, services, isMobile }) {
  return !isMobile ? (
    <div className="grid grid-cols-[10%_80%] mt-4 ml-9">
      <div className="flex items-center justify-center">
        <img className="w-[60px] h-auto mx-auto" src={img} alt="logo" />
      </div>

      <div className="ml-3">
        <p className="flex text-xl font-bold text-amarillo_suave text-left">
          {title}
        </p>

        <ul className="text-blanco list-disc pl-5 text-sm">
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="bg-amarillo_suave w-[70%] h-[1px] mt-3"></div>
      </div>
    </div>
  ) : (
    <div className="mt-4 p-1">
      <div className="flex items-center justify-center">
        <img className="w-[55px] h-auto mx-auto" src={img} alt="logo" />
        <p className="text-xl font-bold text-amarillo_suave text-left ml-3">
          {title}
        </p>
      </div>

      <ul className="text-blanco list-disc pl-3 text-sm">
        {services.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <div className="bg-amarillo_suave w-[100%] h-[2px] mt-3"></div>
      </ul>
    </div>
  );
}

export default Service;
