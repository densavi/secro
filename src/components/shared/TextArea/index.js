import styles from './TextArea.module.scss';
import classNames from 'classnames';
import {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage} from '~/components';

const TextArea = forwardRef(
  ({errorMessage, placeholder, label, ...props}, ref) => {
    const textAreaClasses = classNames(styles.text_area, {
      [styles.error]: !!errorMessage,
    });

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <legend className={styles.legend}>{label}</legend>
          <textarea
            ref={ref}
            className={textAreaClasses}
            placeholder={placeholder}
            name=""
            id=""
            cols="30"
            rows="10"
            {...props}
          />
        </div>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
    );
  },
);
TextArea.propTypes = {
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};
TextArea.displayName = 'TextArea';

export default TextArea;
