import * as React from "react";


function Benefit({ img, title, subtitle, isMobile }) {
  return (
    <div className={`items-center mx-auto h-full rounded-md border border-negro p-5"} ${isMobile ? "w-[100%] p-3" : "w-[70%]" }`}>
      <div className="flex items-center justify-center">
        <div>
            <img className="w-[60px] h-auto mx-auto" src={img} alt="logo" />
            <p className="mt-2 text-negro font-bold text-md justify-center text-center"> {title} </p>
            <p className={`mt-1 text-negro font-thin justify-center text-center ${isMobile ? "text-sm" : "text-md"  }`}> {subtitle} </p>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
