import PropTypes from "prop-types";
function Input({ input }) {
  const { type, value, name, text, checked, OnChange } = input;
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    OnChange(value, name);
  };
  return (
    <div>
      <input
        type={type}
        value={value}
        name={name}
        checked={checked}
        onChange={handleOnChange}
      />
      <span className="inputText">{text}</span>
    </div>
  );
}
Input.propTypes = {
  input: PropTypes.object.isRequired,
};
export default Input;
