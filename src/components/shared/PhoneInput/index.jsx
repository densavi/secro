import ReactPhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';

import {ErrorMessage} from '~/components';

import 'react-phone-input-2/lib/material.css';
import styles from './PhoneInput.module.scss';

const PhoneInput = ({
  label,
  errorMessage,
  value,
  onChange,
  defaultCountry,
  touchEvent,
  searchPlaceHolder,
}) => {
  return (
    <div className={styles.wrapper}>
      <legend className={styles.phone__label}>{label}</legend>
      <ReactPhoneInput
        specialLabel={false}
        enableSearch
        onChange={onChange}
        country={defaultCountry || 'ua'}
        value={value}
        containerClass={styles['phone__input-container']}
        inputClass={styles.phone__input}
        buttonClass={styles.select_country}
        searchClass={styles['search__countries-input']}
        dropdownClass={styles['search__results-dropdown']}
        searchPlaceholder={searchPlaceHolder}
        onTouchEnd={touchEvent}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

PhoneInput.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultCountry: PropTypes.string,
  touchEvent: PropTypes.func,
  searchPlaceHolder: PropTypes.string,
};

export default PhoneInput;
