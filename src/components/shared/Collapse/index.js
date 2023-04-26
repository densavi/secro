import PropTypes from 'prop-types';
import {useState} from 'react';
import classNames from 'classnames';

import {ArrowIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Collapse.module.scss';

const Collapse = ({text, children, className, defaultOpen = false}) => {
  const [open, setOpen] = useState(defaultOpen);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const iconClasses = classNames(styles.container__icon, {
    [styles.container__icon_open]: open,
  });

  return (
    <>
      <div className={`${className} ${styles.container}`} onClick={handleClick}>
        <div className={iconClasses}>
          <ArrowIcon />
        </div>
        <Typography className={styles.container__text}>{text}</Typography>
      </div>
      {open && children}
    </>
  );
};
Collapse.propTypes = {
  text: PropTypes.any.isRequired,
  children: PropTypes.element,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
};

export default Collapse;
