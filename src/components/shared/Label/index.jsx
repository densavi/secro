import PropTypes from 'prop-types';

import styles from './Label.module.scss';
import classNames from 'classnames';

const Label = ({children, className}) => {
  const classes = classNames(styles.wrapper, {
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};
Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Label;
