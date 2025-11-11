import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

export const FilterButton = {
  mr: 2,
  mt: 1,
  backgroundColor: "#cb9636",
  color: "white",
  "&:hover": {
    backgroundColor: "#cb9636",
  },
  "&:focus": {
    backgroundColor: "#cb9636",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#cb9636",
  },
};

export const InputStyle = {
  //input
  input: {
    color: "#fffcfc",
    "::placeholder": {
      color: "#fffcfc",
      opacity: 1,
    },
  },
  textarea: {
    color: "#fffcfc",
    "::placeholder": {
      color: "#fffcfc",
      opacity: 1,
    },
  },
  //label
  label: {
    color: "#fffcfc",
  },
  //focus
  "& label.Mui-focused": {
    color: "#fffcfc",
  },

  //color para los errores
  "& .Mui-error": {
    color: "#cb9636",
  },
  "& label.Mui-error": {
    color: "#cb9636",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#cb9636",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#cb9636",
  },

  // combate el autofill de los navegadores
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#7b7f89",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d4d4d8",
    },
    // combate el autofill
    "& input:-webkit-autofill": {
      boxShadow: "0 0 0 1000px #393b40 inset",
      WebkitTextFillColor: "#fffcfc",
      caretColor: "#fffcfc",
      transition: "background-color 5000s ease-in-out 0s",
    },
  },
};

export const SelectStyle = {
  width: 300,
  marginLeft: "auto",
  marginRight: "10px",
  // cambia el color del texto seleccionado visible
  ".MuiSelect-select": {
    color: "white",
  },
  // también puedes cambiar el ícono del dropdown si lo deseas
  ".MuiSvgIcon-root": {
    color: "white",
  },
  // bordes o fondo si lo necesitas
  backgroundColor: "#2c2c2c",
  borderColor: "#555",

  //input
  input: {
    color: "#fffcfc",
    "::placeholder": {
      color: "#fffcfc",
      opacity: 1,
    },
  },
  //label
  label: {
    color: "#fffcfc",
  },
  //focus
  "& label.Mui-focused": {
    color: "#fffcfc",
  },

  //color para los errores
  "& .Mui-error": {
    color: "#cb9636",
  },
  "& label.Mui-error": {
    color: "#cb9636",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#cb9636",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "#cb9636",
  },

  // combate el autofill de los navegadores
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#7b7f89",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d4d4d8",
    },
    // combate el autofill
    "& input:-webkit-autofill": {
      boxShadow: "0 0 0 1000px #393b40 inset",
      WebkitTextFillColor: "#fffcfc",
      caretColor: "#fffcfc",
      transition: "background-color 5000s ease-in-out 0s",
    },
  },
};

export const MenuStyle = {
  backgroundColor: "#484d50", // color base
  "&:hover": {
    backgroundColor: "#484d50", // sin cambio en hover
  },
  "&.Mui-selected": {
    backgroundColor: "#484d50", // sin color de selección
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#484d50", // sin hover cuando está seleccionado
  },
};

//estilo del button
export const MainButton = {
  backgroundColor: "#c0ac58",
  color: "#1e1e28",
  "&:hover": {
    backgroundColor: "#fcd488",
  },
  opacity: 0.8,
  width: "280px",
  height: "35px",
  borderRadius: "10px"
};

export const TableButton = {
  display: "flex",
  backgroundColor: "#cb9636",
  color: "#1e1e28",
  "&:hover": {
    backgroundColor: "#fcd488",
  },
  mx: "auto",
  width: "50px",
  height: "25px",
  fontSize: "10px",
  textTransform: "none",
};

//estilo del buton añadir (admin suite)
export const AddButton = {
  display: "flex",
  backgroundColor: "#cb9636",
  color: "#1e1e28",
  "&:hover": {
    backgroundColor: "#fcd488",
  },
  width: "200px",
  height: "32px",
  marginTop: "20px"
};

//estilo del checkbox (admin suite)
export const CheckBox = {
  color: "#fffcfc",  
  '& .MuiSvgIcon-root': {
    border: '1.5px solid #484d50',
    borderRadius: '4px', // opcional, para redondear bordes
    width: 20,
    height: 20,
    boxSizing: 'border-box',
  },
  '&.Mui-checked': {
    color: "#cb9636",
    '& .MuiSvgIcon-root': {
      borderColor: "#cb9636",
    },
  },
}


export const RadioButton = {
  color: "#fffcfc",  
  '& .MuiSvgIcon-root': {
    borderRadius: '4px',
    width: 20,
    height: 20,
    boxSizing: 'border-box',
  },
  '&.Mui-checked': {
    color: "#cb9636",
    '& .MuiSvgIcon-root': {
      borderColor: "#cb9636",
    },
  },
}

export const TabSelected = {
  fontSize: "12px",
  textTransform: "none",
  '&.Mui-selected': {
    color: '#cb9636',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#484d50",
    color: "#fffcfc",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StyleTableSortLabel = {
  color: '#fffcfc',
    '& .MuiTableSortLabel-icon': {
      color: '#fffcfc !important', // Forzar color blanco al icono
    },
    '&.Mui-active': {
      color: '#fffcfc',
      '& .MuiTableSortLabel-icon': {
        color: '#fffcfc !important',
      }
    }
}

