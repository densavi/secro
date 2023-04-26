import PropTypes from 'prop-types';
import {AlertCircleIcon} from '~/assets';
import styles from './ErrorMessage.module.scss';
import {Typography} from '~/components';

const ErrorMessage = ({message}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_block}>
        <div className={styles.wrapper_block_cup} />
        <div className={styles.wrapper_block_info}>
          <div className={styles.wrapper_block_info_icon}>
            <AlertCircleIcon />
          </div>
          <Typography className={styles.wrapper_block_info_message}>
            {message}
          </Typography>
        </div>
      </div>
    </div>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
