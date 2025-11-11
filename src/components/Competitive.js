import * as React from "react";


function Competitive({ img, title }) {
  return (
    <div className="w-full h-full rounded-md border border-amarillo p-5">
      <div className="flex items-center justify-center">
        <div>
            <img className="w-[60px] h-auto mx-auto" src={img} alt="logo" />

            <p className="mt-2 text-negro text-md justify-center text-center"> {title} </p>
        </div>
      </div>
    </div>
  );
}

export default Competitive;
