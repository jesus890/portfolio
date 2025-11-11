import axios from "axios";

export const enviarInformacionContacto = async (data) => {
  try 
  {
    //peticion
    const response = await axios.post(`${process.env.REACT_APP_LARAVEL_API}/informacionContacto`, data);
    return response.data;
  } 
  catch (error) //ocurre un error
  {
    if (error.response)  //intenta devolver el error del endpoint 
      return error.response.data;
    else //no llega al endpoint
      return null;
  }
};