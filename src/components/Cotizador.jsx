import PropTypes from "prop-types";
const Cotizador = ({ data }) => {
  const { marca, year, plan } = data;
  if (marca === "" || year === "" || plan === "") {
    return null;
  }
  return (
    <section className="WrapperCotizador">
      <h2 className="subtitle">Resumen de la cotización:</h2>
      <ul className="wrapperList">
        <li className="Item">
          Marca: <span className="text">{marca}</span>
        </li>
        <li>
          Año del Vehiculo: <span className="text">{year}</span>
        </li>
        <li>
          Plan: <span className="text">{plan}</span>
        </li>
      </ul>
    </section>
  );
};
Cotizador.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Cotizador;
