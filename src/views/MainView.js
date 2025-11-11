import React, { useState, useEffect } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

function MainView({isMobile}) {  
  return (
    !isMobile ? <Desktop isMobile={isMobile}/> :   <Mobile isMobile={isMobile}/>
  );
}

export default MainView;
