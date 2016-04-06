
import React, { PropTypes } from 'react';

/**
 * A button for the NavBar.
 * `icon` must be a valid font-awesome icon name
 */
const Btn = ({ disabled, title, icon, onClick, children, id }) => (
  <a href="#" className={disabled ? 'disabled' : ''} {...{ title, onClick, id }}>
    {icon ? <i className={`fa fa-${icon}`} /> : null}
    {children}
  </a>
);

Btn.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
