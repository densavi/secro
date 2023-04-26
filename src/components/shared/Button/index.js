import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Router from 'next/router';

import styles from './Button.module.scss';
import {useCallback} from 'react';

const Button = ({
  route,
  onClick,
  children,
  disabled,
  className = '',
  size = 'medium',
  type = 'button',
  variant = 'primary',
}) => {
  const buttonClasses = classNames(
    styles.container,
    styles[`container_${size}`],
    styles[`container_${variant}`],

    {
      [className]: className,
    },
  );

  const handleLinkClick = useCallback(() => {
    if (route) {
      Router.push(route);
    }
  }, [route]);

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      onClick={route ? handleLinkClick : onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  route: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  type: PropTypes.string,
  variant: PropTypes.oneOf([
    'primary',
    'ghost',
    'ghostBright',
    'outlined',
    'secondary',
  ]),
};

export default Button;
