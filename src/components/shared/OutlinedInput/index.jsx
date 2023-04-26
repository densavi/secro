import React, {forwardRef} from 'react';
import classNames from 'classnames';

import styles from './OutlinedInput.module.scss';
import PropTypes from 'prop-types';

const OutlinedInput = forwardRef(
  (
    {
      name,
      label,
      disabled,
      RightIcon,
      placeholder,
      type = 'text',
      className = '',
      inputClassName = '',
      value = '',
      ...rest
    },
    ref,
  ) => {
    const wrapperClassnames = classNames(styles.wrapper, className);

    const inputClassnames = classNames(
      styles.wrapper__input_wrapper_input,
      inputClassName,
    );

    return (
      <label htmlFor={name} className={wrapperClassnames}>
        {label}
        <div className={styles.wrapper__input_wrapper}>
          <input
            {...rest}
            id={name}
            ref={ref}
            name={name}
            autoComplete="off"
            disabled={disabled}
            className={inputClassnames}
            placeholder={placeholder}
            type={type}
            value={value}
          />
          {RightIcon && (
            <div className={styles.wrapper__input_wrapper_icon}>
              {RightIcon}
            </div>
          )}
        </div>
      </label>
    );
  },
);
OutlinedInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  RightIcon: PropTypes.any,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  inputClassName: PropTypes.string,
};

OutlinedInput.displayName = 'OutlinedInput';

export default OutlinedInput;
