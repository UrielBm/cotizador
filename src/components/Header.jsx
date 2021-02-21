import Title from "./Title";
import styled from "@emotion/styled";

const WrapperHeader = styled.header`
  background-color: rgba(136, 10, 10, 0.5);
  width: 100%;
  color: #fff;
  padding: 1.2rem 0;
`;
const Header = () => {
  return (
    <WrapperHeader>
      <Title title="Cotizador" />
    </WrapperHeader>
  );
};

export default Header;
