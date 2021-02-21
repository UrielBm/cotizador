import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Error = ({ text }) => {
  const StyleError = styled.div`
    background-color: #c51b1b;
    padding: 0.5rem 0;
    text-align: center;
    color: #eeeded;
    margin: 0 0 1rem 0;
  `;
  return (
    <StyleError>
      <p>{text}</p>
    </StyleError>
  );
};
Error.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Error;
