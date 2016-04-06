
import React, { PropTypes } from 'react';

/**
 * A button for the NavBar.
 * `icon` must be a valid font-awesome icon name
 */
const Btn = ({ disabled, active, title, icon, onClick, children, id }) => {
  let classes = "";
  classes += (disabled ? "disabled " : "");
  classes += (active ? "active " : "");
  return <a href="#" className={classes.trim()} {...{ title, onClick, id }}>
    {icon ? <i className={`fa fa-${icon}`} /> : null}
    {children}
  </a>
};

Btn.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Btn;
