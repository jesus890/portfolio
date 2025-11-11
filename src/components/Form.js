import React, { useState } from "react";
import telefono from "../assets/telefono.svg";
import correo from "../assets/correo.svg";
import { IconButton, Snackbar, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from 'react-imask';
import { enviarInformacionContacto } from "../service/apiService";

function Form({ isMobile }) {

  //snackbar de alertas
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  //react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  //cierra el snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ ...snackbar, open: false });
  };

  //action snackbar
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" className="text-amarillo" />
      </IconButton>
    </React.Fragment>
  );


  //guarda el registro
  const onSubmit = async (data) => {
    try 
    {
      console.log({data})
      let result;

      result = await enviarInformacionContacto(data);

      console.log({result})
        
      //si el mensaje se lográ enviar
      if (result)
        setSnackbar({ message: result.message, open: true });
    } 
    catch (error) {
      console.log({ error });
      setSnackbar({ message: "Ocurrió un error inesperado, intente de nuevo", open: true });
    }

    //limpia los datos despues de mandar una solicitud
    reset();
  };


  return !isMobile ? (
    <div className="flex justify-center items-center h-full bg-white">

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbar.message}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        ContentProps={{
          sx: {
            color: "#fffcfc",
          },
        }}
      />

      {/* Panel izquierdo */}
      <div
        style={{ zIndex: 2000, marginRight: "-20px" }}
        className="bg-gris p-10 flex flex-col h-[30%] rounded-l-2xl shadow-xl "
      >
        <h2 className="text-2xl font-bold text-[#62747a] mb-6">Contáctanos</h2>

        {/* correo */}
        <div className="flex">
          <img className="w-[30px] h-auto mx-auto" src={correo} alt="logo" />
          <p className="text-negro font-thin text-md ml-2">
            contacto@SmartMineCode.com
          </p>
        </div>

        <div className="flex mt-2">
          <img className="w-[30px] h-auto mx-auto" src={telefono} alt="logo" />
          <p className="text-negro font-thin text-md ml-2">+52 5536393972</p>
        </div>
      </div>

      {/* Panel derecho (formulario) */}
      <div className="bg-amarillo p-10 w-1/2 flex flex-col rounded-r-3xl justify-center">
        <form 
          className="flex flex-col gap-4" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="nombre"
            control={control}
            rules={{ required: "Campo faltante o inválido" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre*"
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.nombre}
                helperText={errors.nombre ? "Campo faltante  o inválido" : ""}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Campo faltante o inválido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email*"
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.email}
                helperText={errors.email ? "Campo faltante  o inválido" : ""}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Campo faltante o inválido",  
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Teléfono*"
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.phone}
                helperText={errors.phone ? "Campo faltante  o inválido" : ""}
                InputProps={{
                  inputComponent: IMaskInput,
                  inputProps: {
                    mask: "(#00) 000-0000",
                    definitions: { "#": /[1-9]/ },
                    overwrite: true
                  },
                }}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Campo faltante o inválido" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mensaje*"
                multiline
                rows={2}
                maxRows={3}
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.message}
                helperText={errors.message ? "Campo faltante  o inválido" : ""}
              />
            )}
          />
                   
          <button
            type="submit"
            className="mt-4 bg-amarillo mx-auto text-blanco font-bold rounded-md py-2 border border-white hover:bg-yellow-300 transition w-[50%]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div className=" justify-center items-center h-auto bg-white">

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbar.message}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        ContentProps={{
          sx: {
            color: "#fffcfc",
          },
        }}
      />

      {/* Panel izquierdo */}
      <div className="bg-gris p-5 flex flex-col h-[25%] rounded-l-2xl shadow-xl w-[80%] items-end ml-[20%]">
        <h2 className="text-2xl font-bold text-[#62747a] mb-6">Contáctanos</h2>

        {/* correo */}
        <div className="flex">
          <img className="w-[30px] h-auto mx-auto" src={correo} alt="logo" />
          <p className="text-negro font-thin text-md ml-2">
            contacto@SmartMineCode.com
          </p>
        </div>

        <div className="flex mt-2">
          <img className="w-[30px] h-auto mx-auto" src={telefono} alt="logo" />
          <p className="text-negro font-thin text-md ml-2">+52 5536393972</p>
        </div>
      </div>

      {/* Panel derecho (formulario) */}
      <div className="bg-amarillo p-10 w-[80%] flex flex-col rounded-r-3xl justify-center mt-3">
        <form className="flex flex-col gap-4">

          <Controller
            name="nombre"
            control={control}
            rules={{ required: "Campo faltante o inválido" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre*"
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.nombre}
                helperText={errors.nombre ? "Campo faltante  o inválido" : ""}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: "Campo faltante o inválido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email*"
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.email}
                helperText={errors.email ? "Campo faltante  o inválido" : ""}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Campo faltante o inválido",  
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Teléfono*"
                 className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.phone}
                helperText={errors.phone ? "Campo faltante  o inválido" : ""}
                InputProps={{
                  inputComponent: IMaskInput,
                  inputProps: {
                    mask: "(#00) 000-0000",
                    definitions: { "#": /[1-9]/ },
                    overwrite: true
                  },
                }}
              />
            )}
          />

          <Controller
            name="message"
            control={control}
            rules={{ required: "Campo faltante o inválido" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mensaje*"
                multiline
                rows={2}
                maxRows={3}
                className="rounded-md px-4 py-2 bg-white placeholder-gray-400 focus:outline-none"
                error={!!errors.message}
                helperText={errors.message ? "Campo faltante  o inválido" : ""}
              />
            )}
          />


          <button
            type="submit"
            className="mt-4 bg-amarillo mx-auto text-blanco font-bold rounded-md py-2 border border-white hover:bg-yellow-300 transition w-[50%]"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;