import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
// import NextLink from 'next/link';
import classNames from 'classnames';

import {Typography} from '~/components';
// import {ArrowRight} from '~/assets';

import styles from './MainServices.module.scss';

const MainServicesItem = ({
  textId,
  titleId,
  Icon,
  // route,
  isComingSoon,
  index,
}) => (
  <>
    <div>
      <div className={styles.item__icon}>
        <Icon />
      </div>
      <Typography
        tagName="h3"
        type="Small"
        variant="Heading"
        color="Light"
        transform="Uppercase"
        className={styles.item__title}>
        <FormattedMessage id={titleId} />
        {isComingSoon && (
          <div
            className={classNames(styles.item__pill, {
              [styles.item__pill_primary]: index === 5,
            })}>
            Coming Soon
          </div>
        )}
      </Typography>
      <Typography color="Gray4" type="Small" className={styles.item__text}>
        <FormattedMessage id={textId} />
      </Typography>
    </div>
    <div>
      {/*<NextLink href={route} disabled={isComingSoon}>*/}
      {/*  <a className={styles.item__link}>*/}
      {/*    <span>*/}
      {/*      <ArrowRight />*/}
      {/*    </span>*/}
      {/*    <FormattedMessage id="mainServices.listButton" />*/}
      {/*  </a>*/}
      {/*</NextLink>*/}
    </div>
  </>
);

MainServicesItem.propTypes = {
  Icon: PropTypes.func,
  route: PropTypes.string.isRequired,
  textId: PropTypes.string.isRequired,
  titleId: PropTypes.string.isRequired,
  isComingSoon: PropTypes.bool,
  index: PropTypes.number,
};

export default MainServicesItem;
