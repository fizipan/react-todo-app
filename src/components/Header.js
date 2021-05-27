import propTypes from 'prop-types';
import Button from 'elements/Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAddShow, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button text={showAddTask ? 'Close' : undefined} bgColor={showAddTask ? 'red' : undefined} onAddShow={onAddShow} />}
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
