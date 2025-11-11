export const fechaAExcelNumero = (anio, mes, dia) => {
  const fecha = new Date(Date.UTC(anio, mes - 1, dia)); // UTC evita problemas de zona horaria
  const fechaBase = new Date(Date.UTC(1899, 11, 30)); // 1899-12-30 en UTC
  const diferenciaDias = Math.round(
    (fecha - fechaBase) / (1000 * 60 * 60 * 24)
  );
  return diferenciaDias;
};

//convierte el valor de excel a fecha
export const excelAFecha = (serial) => {
  const excelBase = new Date(1899, 11, 30); // 1899-12-30
  const msPerDay = 24 * 60 * 60 * 1000;
  const date = new Date(excelBase.getTime() + serial * msPerDay);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const convierteMinusculas = (texto) => {
  return texto.toLowerCase();
};

export const quitarCeros = (numeroConCeros) => {
  const numeroStr = String(numeroConCeros);
  const numeroSinCeros = parseInt(numeroStr.replace(/^0+/, ""), 10);
  return numeroSinCeros;
};

export const valoresInicialesNiveles = () => {
  let result = {
    rect_op1_1260: {
      nivel: "OP1",
      numero: 1260,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op1_1235: {
      nivel: "OP1",
      numero: 1235,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op1_1210: {
      nivel: "OP1",
      numero: 1210,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op1_1185: {
      nivel: "OP1",
      numero: 1185,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op1_1160: {
      nivel: "OP1",
      numero: 1160,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op1_1010: {
      nivel: "OP1",
      numero: 1010,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1160: {
      nivel: "OP2",
      numero: 1160,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1135: {
      nivel: "OP2",
      numero: 1135,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1110: {
      nivel: "OP2",
      numero: 1110,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1085: {
      nivel: "OP2",
      numero: 1085,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1060: {
      nivel: "OP2",
      numero: 1060,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op2_1035: {
      nivel: "OP2",
      numero: 1035,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_985: {
      nivel: "OP5",
      numero: 985,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_960: {
      nivel: "OP5",
      numero: 960,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_935: {
      nivel: "OP5",
      numero: 935,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_910: {
      nivel: "OP5",
      numero: 910,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_885: {
      nivel: "OP5",
      numero: 885,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_860: {
      nivel: "OP5",
      numero: 860,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_835: {
      nivel: "OP5",
      numero: 835,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_810: {
      nivel: "OP5",
      numero: 810,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_785: {
      nivel: "OP5",
      numero: 785,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_760: {
      nivel: "OP5",
      numero: 760,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op5_735: {
      nivel: "OP5",
      numero: 735,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_1060: {
      nivel: "OP7",
      numero: 1060,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_960: {
      nivel: "OP7",
      numero: 960,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_935: {
      nivel: "OP7",
      numero: 935,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_910: {
      nivel: "OP7",
      numero: 910,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_885: {
      nivel: "OP7",
      numero: 885,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_835: {
      nivel: "OP7",
      numero: 835,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_810: {
      nivel: "OP7",
      numero: 810,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_785: {
      nivel: "OP7",
      numero: 785,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_760: {
      nivel: "OP7",
      numero: 760,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_745: {
      nivel: "OP7",
      numero: 745,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op7_735: {
      nivel: "OP7",
      numero: 735,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_1085: {
      nivel: "OP8",
      numero: 1085,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_1060: {
      nivel: "OP8",
      numero: 1060,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_1010: {
      nivel: "OP8",
      numero: 1010,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_960: {
      nivel: "OP8",
      numero: 960,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_935: {
      nivel: "OP8",
      numero: 935,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_910: {
      nivel: "OP8",
      numero: 910,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_885: {
      nivel: "OP8",
      numero: 885,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_860: {
      nivel: "OP8",
      numero: 860,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_835: {
      nivel: "OP8",
      numero: 835,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_810: {
      nivel: "OP8",
      numero: 810,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_785: {
      nivel: "OP8",
      numero: 785,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_745: {
      nivel: "OP8",
      numero: 745,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_735: {
      nivel: "OP8",
      numero: 735,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_op8_684: {
      nivel: "OP8",
      numero: 684,
      color: "#fce4ac",
      originalColor: "#fce4ac",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_1185: {
      nivel: "WASTE",
      numero: 1185,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_1110: {
      nivel: "WASTE",
      numero: 1110,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_1060: {
      nivel: "WASTE",
      numero: 1060,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_1010: {
      nivel: "WASTE",
      numero: 1010,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_910: {
      nivel: "WASTE",
      numero: 910,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_835: {
      nivel: "WASTE",
      numero: 835,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_785: {
      nivel: "WASTE",
      numero: 785,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
    rect_waste_745: {
      nivel: "WASTE",
      numero: 745,
      color: "#eaeaea",
      originalColor: "#eaeaea",
      stroke: undefined,
      strokeWidth: undefined,
    },
  };

  return result;
};


export const valoresInicialesPiramides = () => {
  let result = {
    SUP_TP0: {
      nivel: "SUP_TPO_1800",
      numero: "StockPiles",
      clave: "SUP_TPO_1800",
      color_1: "#fdcf86", 
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0" 
    },
    STK_01: {
      nivel: "STACKER 01",
      numero: "StockPiles",
      clave: "STK_01",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    STK_02: {
      nivel: "STACKER 02",
      numero: "StockPiles",
      clave: "STK_02",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    MLL_ETC_0684_01: {
      nivel: "MLL_ETC_0684_01",
      numero: "StockPiles",
      clave: "MLL_ETC_0684_01",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    ML_01: {
      nivel: "ML-01",
      numero: "StockPiles",
      clave: "ML_01",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    ML_02: {
      nivel: "ML-02",
      numero: "StockPiles",
      clave: "ML_02",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    ML_04: {
      nivel: "ML-04",
      numero: "StockPiles",
      clave: "ML_04",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    },
    ML_05: {
      nivel: "ML-05",
      numero: "StockPiles",
      clave: "ML_04",
      color_1: "#fdcf86",
      original_1: "#fdcf86",
      color_2: "#feecb0",
      original_2: "#feecb0"
    }
  }

  return result;
}

export const valoresInicialesGruas = () => {
  let result = {
    RB1: {
      nivel: "RB1",
      numero: 1,
      color: "#a50011",
      original: "#a50011",
    },
    RB2: {
      nivel: "RB2",
      numero: 2,
      color: "#a50011",
      original: "#a50011",
    },
    RB3: {
      nivel: "RB3",
      numero: 3,
      color: "#a50011",
      original: "#a50011",
    },
    RB4: {
      nivel: "RB4",
      numero: 4,
      color: "#a50011",
      original: "#a50011",
    },
    RB5: {
      nivel: "RB5",
      numero: 5,
      color: "#a50011",
      original: "#a50011",
    },
    GENERADORA100: {
      nivel: "QUEBRADORA A100",
      numero: 100,
      color: "#a50011",
      original: "#a50011",
    }
  }

  return result;
}


export const valoresInicialesOP = () => {
  let result = {
     OP7: {
      nivel: "0P7",
      numero: "0P7",
      color: "#cb9636",
      original: "#cb9636"
    },
    OP8: {
      nivel: "0P8",
      numero: "0P8",
      color: "#cb9636",
      original: "#cb9636"
    },
  }
  return result;
}
