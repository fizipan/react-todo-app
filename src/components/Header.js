import propTypes from 'prop-types';
import Button from 'elements/Button';

const Header = ({ title, onAddShow, showAddTask }) => {
  const onClick = () => {
    alert('Hallo Hafizh');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} text={showAddTask ? 'Close' : undefined} bgColor={showAddTask ? 'red' : undefined} onAddShow={onAddShow} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: propTypes.string,
};

export default Header;
