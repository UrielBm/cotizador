import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Button = ({ type, text, action }) => {
  const StyleButton = styled.button`
    width: 100%;
    background-color: #8f384d;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    border: none;
    border-radius: 2rem;
    outline: none;
    transition: background-color 0.3s;
    &:hover {
      background-color: #dd9866;
      cursor: pointer;
    }
  `;
  const handleOnClick = () => {
    if (action) {
      action();
    }
  };
  return (
    <StyleButton type={type} onClick={handleOnClick}>
      {text}
    </StyleButton>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};
export default Button;
