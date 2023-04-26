import styles from './Input.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ErrorMessage} from '~/components';
import {forwardRef} from 'react';

const Input = forwardRef(
  (
    {
      value,
      errorMessage,
      type,
      readOnly,
      touchEvent,
      placeholder,
      RightIcon,
      viaCursor,
      onClick,
      customOnChange,
      label,
      ...props
    },
    ref,
  ) => {
    const handleChange = (event) => {
      if (customOnChange && event && event.target) {
        customOnChange && customOnChange(event.target.value);
      }
    };

    const inputClasses = classNames(styles.input, {
      [styles.input_error]: !!errorMessage,
      [styles.via_cursor]: viaCursor,
      [styles.read_only]: readOnly,
    });

    return (
      <>
        <div className={styles.wrapper} onClick={onClick}>
          <legend className={styles.legend}>{label}</legend>
          {value ? (
            <input
              ref={ref}
              onTouchEnd={touchEvent}
              className={inputClasses}
              disabled={readOnly}
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={handleChange}
              {...props}
            />
          ) : (
            <input
              ref={ref}
              onTouchEnd={touchEvent}
              className={inputClasses}
              disabled={readOnly}
              type={type}
              placeholder={placeholder}
              {...props}
            />
          )}
          {RightIcon && <div className={styles.icon}>{RightIcon}</div>}
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </>
    );
  },
);
Input.propTypes = {
  value: PropTypes.any,
  errorMessage: PropTypes.string,
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  customOnChange: PropTypes.func,
  onClick: PropTypes.func,
  touchEvent: PropTypes.func,
  placeholder: PropTypes.string,
  RightIcon: PropTypes.any,
  viaCursor: PropTypes.bool,
  label: PropTypes.string,
};
Input.displayName = 'Input';

export default Input;
