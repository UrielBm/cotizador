import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Cotizador from "./components/Cotizador";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
const WrapperMain = styled.main`
  width: 360px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
const WrapperForm = styled.section`
  background-color: #5c6e91;
  padding: 1.5rem 2rem;
  width: 360px;
  box-sizing: border-box;
`;
function App() {
  const [loading, setLoading] = useState(false);
  const [cotizador, setCotizador] = useState({
    data: {
      marca: "",
      year: "",
      plan: "",
    },
    cotizacion: 0,
  });
  const { data, cotizacion } = cotizador;
  return (
    <WrapperMain>
      <Header />
      <WrapperForm>
        <Formulario setCotizador={setCotizador} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        {!loading ? (
          <>
            <Cotizador data={data} /> <Resultado cotizacion={cotizacion} />
          </>
        ) : null}
      </WrapperForm>
    </WrapperMain>
  );
}

export default App;
