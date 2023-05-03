import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Typography, Button} from '~/components';

import styles from './BottomBanner.module.scss';

const BottomBanner = ({title, text, buttonText, route, onClick, id}) => (
  <section className={styles.container} id={id}>
    <div className="container">
      <div className={styles.container__inner}>
        <p className={styles.container__inner_text}>
          <FormattedMessage id={text} />
        </p>
        <Typography
          type="Large"
          variant="Heading"
          color="Light"
          transform="Uppercase"
          tagName="h3">
          <FormattedMessage id={title} />
        </Typography>
        <div className={styles.container__inner_button}>
          <Button route={route} onClick={onClick}>
            <FormattedMessage id={buttonText} />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

BottomBanner.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  route: PropTypes.string,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BottomBanner;
