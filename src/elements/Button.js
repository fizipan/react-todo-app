import propTypes from 'prop-types';

const Button = ({ bgColor, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  bgColor: 'green',
  text: 'Add',
};

Button.propTypes = {
  bgColor: propTypes.string,
  text: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
