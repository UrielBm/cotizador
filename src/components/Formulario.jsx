import { useState } from "react";
import Button from "./Button";
import Error from "./Error";
import Input from "./Input";
import Select from "./Select";
import {
  obtenerDiferenciaYear,
  Calcularmarca,
  CalcularIncrementoPlan,
} from "../helper";
import PropTypes from "prop-types";
const arrayMarcas = [
  { id: "marca1", value: "americano" },
  { id: "marca2", value: "europeo" },
  { id: "marca3", value: "asiatico" },
];
const arrayAños = [
  { id: 2021, value: "2021" },
  { id: 2020, value: "2020" },
  { id: 2019, value: "2019" },
  { id: 2018, value: "2018" },
  { id: 2017, value: "2017" },
  { id: 2016, value: "2016" },
  { id: 2015, value: "2015" },
  { id: 2014, value: "2014" },
  { id: 2013, value: "2013" },
  { id: 2012, value: "2012" },
];
const Formulario = ({ setCotizador, setLoading }) => {
  const [data, Setdata] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);
  const { marca, year, plan } = data;
  const handleOnChange = (value, name) => {
    Setdata({ ...data, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // base de la cotización
    let cotizacion = 2000;
    // obtener diferencia
    const diferencia = obtenerDiferenciaYear(year);
    //quitar 3% por año
    cotizacion -= (diferencia * 3 * cotizacion) / 100;
    // incremento por marca
    cotizacion = cotizacion * Calcularmarca(marca);
    // incremento segun el plan
    const incrementoPlan = CalcularIncrementoPlan(plan);
    cotizacion = parseFloat(cotizacion * incrementoPlan).toFixed(2);
    setLoading(true);
    setTimeout(() => {
      setCotizador({
        data,
        cotizacion: Number(cotizacion),
      });
      setLoading(false);
    }, 2000);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      {error ? <Error text="faltan datos en el form" /> : null}
      <div className="wrapperSelects">
        <label className="labels">Marca:</label>
        <Select
          arrayOptions={arrayMarcas}
          OnChange={handleOnChange}
          name="marca"
          value={marca}
        />
      </div>
      <div className="wrapperSelects">
        <label className="labels">Año:</label>
        <Select
          arrayOptions={arrayAños}
          OnChange={handleOnChange}
          name="year"
          value={year}
        />
      </div>
      <div className="wrapperSelects">
        <label className="labels">Plan:</label>
        <div className="wrapperInputs">
          <Input
            input={{
              type: "radio",
              value: "basico",
              name: "plan",
              text: "Básico",
              checked: plan === "basico" ? true : false,
              OnChange: handleOnChange,
            }}
          />
          <Input
            input={{
              type: "radio",
              value: "completo",
              name: "plan",
              text: "Completo",
              checked: plan === "completo" ? true : false,
              OnChange: handleOnChange,
            }}
          />
        </div>
      </div>
      <div className="wrapperSelects">
        <Button type="submit" text="Cotizar" />
      </div>
    </form>
  );
};
Formulario.propTypes = {
  setCotizador: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default Formulario;
