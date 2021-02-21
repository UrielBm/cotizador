import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
const Resultado = ({ cotizacion }) => {
  return (
    <>
      {cotizacion === 0 ? (
        <div className="wrapperResultado">
          <p className="withoutCoti">Elige marca, año y tipo de seguro</p>
        </div>
      ) : (
        <div className="wrapperResultado">
          <TransitionGroup component="p" className="transitionResulado">
            <CSSTransition
              classNames="transitionResulado"
              key={cotizacion}
              timeout={{ enter: 100, exit: 100 }}
            >
              <span className="resultado">El Total es: ${cotizacion}</span>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    </>
  );
};
Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};
export default Resultado;
