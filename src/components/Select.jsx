import styled from "@emotion/styled";
import PropTypes from "prop-types";
function Select({ arrayOptions, OnChange, name, value }) {
  const StyleSelect = styled.select`
    border: none;
    border-radius: 2rem;
    margin-top: 0.5rem;
    padding: 0.2rem 0.7rem;
    font-size: 1.1rem;
    font-weight: 400;
    color: black;
    outline: none;
  `;
  const hanldeOnChange = (e) => {
    const { value, name } = e.target;
    OnChange(value, name);
  };
  return (
    <StyleSelect onChange={hanldeOnChange} name={name} value={value}>
      <option value="">--Select a option--</option>
      {arrayOptions.map((item) => {
        return (
          <option value={item.value} key={item.id} className="optionItem">
            {item.value}
          </option>
        );
      })}
    </StyleSelect>
  );
}
Select.propTypes = {
  arrayOptions: PropTypes.array.isRequired,
  OnChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Select;
