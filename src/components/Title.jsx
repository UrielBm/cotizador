import PropTypes from "prop-types";
import styled from "@emotion/styled";
const Titulo = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
`;
const Title = ({ title }) => <Titulo>{title}</Titulo>;
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
