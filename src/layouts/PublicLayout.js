import React, { useRef, useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import LogoSmartMine from "../assets/smartminecode.jpg";
import { Link } from "react-router-dom";

//menu list mobile 
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const PublicLayout = ({isMobile = false}) => {

  //abre el menu mobile
  const [open, setOpen] = React.useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [seccion, setSeccion] = React.useState(0);

   //redireccion a cada modulo del sistema
  const handleNavigation = (newValue) => {
    setSeccion(newValue);
    const sectionIds = [
      "phrase",
      "ourservices",
      "competitives",
      "benefits",
      "clients",
      "form",
    ];
    const targetId = sectionIds[newValue];
    const targetElement = document.getElementById(targetId);
    if (targetElement)
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const menuItems = [
    { label: 'Quienes somos', index: 0 },
    { label: 'Servicios', index: 1 },
    { label: 'Diferenciales competitivos', index: 2 },
    { label: 'Beneficios', index: 3 },
    { label: 'Clientes y Alianzas', index: 4 },
    { label: 'Solicitar Cotización', index: 5 },
  ];

  const MobileMenu = (
    <Box sx={{ width: 270 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map(({ label, index }) => (
          <ListItem key={label} disablePadding onClick={()=>handleNavigation(index)}>
            <ListItemButton sx={{backgroundColor: index ===5 ? "#c3a536" : "#3d4242" }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">

      {/* Version Web */}
      {!isMobile ? (
        <nav className="block p-3 w-[80%] text-white bg-ceniza shadow-lg rounded-[60px] absolute left-1/2 transform -translate-x-1/2 mt-5 z-50 ">
          <div className="container flex flex-wrap  justify-between mx-auto text-gray-100">
            <div className="flex-grow basis-1/10 ml-5">
              <a href="#">
                <img
                  className="w-[full] h-[38px] ml-5 mt-2"
                  src={LogoSmartMine}
                  alt="logo"
                />
              </a>
            </div>

            <div className="flex-grow basis-9/10 ml-[-30px]">
              <ul className="flex flex-row mt-2 mb-4 gap-6">
                <li className="flex  p-1 text-sm gap-x-2 text-blanco" key="somos" onClick={() => handleNavigation(0)} > 
                  <Link to="/">Quiénes somos</Link>
                </li>
                <li className="flex  p-1 text-sm gap-x-2 text-blanco" key="servicios" onClick={() => handleNavigation(1)} >
                  <Link to="/">Servicios</Link>
                </li>
                <li className="flex  p-1 text-sm gap-x-2 " key="diferenciales" onClick={() => handleNavigation(2)} >
                  <Link to="/">Diferenciales competitivos</Link>
                </li>
                <li className="flex  p-1 text-sm gap-x-2 text-blanco" key="beneficios" onClick={() => handleNavigation(3)} >
                  <Link to="/">Beneficios</Link>
                </li>
                <li className="flex  p-1 text-sm gap-x-2 text-blanco" key="clientes" onClick={() => handleNavigation(4)}>
                  <Link to="/">Clientes y Alianzas</Link>
                </li>
                <li className="flex p-1 text-sm gap-x-2 text-blanco font-bold bg-amarillo rounded-md" key="cotizacion" onClick={() => handleNavigation(5)}>
                  <Link to="/">Solicitar cotización</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) :
      (
        <div className="flex bg-ceniza shadow-lg p-3">  {/* Version Mobile */}
          <button
            onClick={toggleDrawer(true)}
            className="relative h-12 w-12 "
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="white"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </span>
          </button>
          <img
            className="w-[full] h-[38px] mx-auto mt-2"
            src={LogoSmartMine}
            alt="logo"
          />
          <Drawer 
            open={open}
            onClose={toggleDrawer(false)} 
            PaperProps={{
              sx: { backgroundColor: "#3d4242", color: "#fffcfc" } // color opcional del texto
          }}>
            {MobileMenu}
          </Drawer>
        </div>
      )}

      {/* Aquí se insertará la ruta hija */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
